/**
 * CartContext.tsx
 *
 * Purpose:
 * This module implements a React Context for the shopping cart used across the Cart App.
 * It centralizes cart state (items and quantities) and exposes helper functions to
 * modify the cart without prop drilling. The cart is persisted to localStorage so the
 * user's cart survives page refreshes.
 *
 * Usage example:
 *
 * // Wrap your app:
 * <CartProvider>
 *   <App />
 * </CartProvider>
 *
 * // Consume in a component:
 * const { cart, addToCart, updateCart, emptyCart, cartCount } = useCart();
 *
 * Notes / considerations:
 * - Persistence is intentionally simple (writes full cart JSON on every change). For large apps, consider debouncing or using a more robust storage strategy.
 * - Functions mutate logical state only; the persistence side-effect is handled by useEffect below.
 */

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

// --- Types ---
// A single cart item stored in context/localStorage. Quantity denotes how many units are present.
type CartItem = {
  id: number; // product identifier (must be stable)
  title: string; // display title for convenience
  price: number; // numeric price (in smallest currency unit or as agreed)
  quantity: number; // number of units of this product in the cart
};

n; // Minimal shape accepted by addToCart. Quantity is omitted because the function increments by 1.
type Item = {
  id: number;
  title: string;
  price: number;
};

// Public interface of the CartContext provided to consumers via useCart().
type CartContextType = {
  cart: CartItem[]; // current items in cart (read-only; mutate via provided functions)
  cartCount: number; // total number of units across all items (convenience value)
  addToCart: (item: Item) => void; // adds one unit of `item` to the cart (increments if present)
  updateCart: (itemId: number, quantity: number) => void; // set quantity for a given item (removes if <= 0)
  emptyCart: () => void; // remove all items from cart
};

// Create the CartContext with undefined to force callers to use the provider.
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook wrapper for safe access; throws a helpful error when used outside a provider.
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

// Props for the provider component: only children are required.
type CartProviderProps = {
  children: ReactNode;
};

/**
 * CartProvider
 * - Manages cart state and persistence.
 * - Provides helper functions to modify the cart safely.
 *
 * Implementation details:
 * - Loads initial state from localStorage on first render.
 * - Persists the cart to localStorage on every change (simple and reliable for small carts).
 * - addToCart increments quantity when the item exists; otherwise it appends the item with quantity 1.
 * - updateCart sets a specific quantity and removes items when quantity <= 0.
 */
export const CartProvider = (props: CartProviderProps) => {
  // Initialize cart from localStorage. Using lazy initializer prevents reading localStorage on every render.
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Derive the total count of units in the cart for convenience in UI (e.g., badge count).

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  /**
   * addToCart(item)
   * - If the item is already present, increases its quantity by 1.
   * - Otherwise, adds the item with quantity 1.
   * - Uses functional setState to avoid stale closures.
   */
  const addToCart = (item: Item) => {
    setCart((existingCart: CartItem[]) => {
      const existingItem = existingCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // increment quantity for the existing item
        return existingCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      // add new item (quantity defaults to 1)
      return [...existingCart, { ...item, quantity: 1 }];
    });
  };

  /**
   * updateCart(itemId, newQuantity)
   * - Sets the given item's quantity to newQuantity.
   * - Removes the item when newQuantity <= 0 to keep the cart clean.
   */
  const updateCart = (itemId: number, newQuantity: number) => {
    setCart((existingCart: CartItem[]) => {
      return existingCart
        .map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);
    });
  };

  /**
   * emptyCart()
   * - Clears the in-memory cart; the useEffect below persists the empty cart to localStorage.
   */
  const emptyCart = () => {
    setCart([]);
  };

  // Persist the cart to localStorage whenever it changes. For production apps consider debouncing or storing diffs.
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (err) {
      // Failing to persist should not crash the app — log and proceed. In real apps, report to telemetry.
      // eslint-disable-next-line no-console
      console.warn("Failed to persist cart to localStorage", err);
    }
  }, [cart]);

  // Provide cart state and functions to all children components.
  return (
    <CartContext.Provider
      value={{ cart, cartCount, addToCart, updateCart, emptyCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

// Default export kept for compatibility if any part of the codebase imports the context directly.
export default CartContext;
