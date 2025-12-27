/**
 * CartContext.tsx
 *
 * Purpose:
 * This file defines the Cart Context for the CartApp. It provides a global state for the shopping cart,
 * allowing any component in the app to access and modify the cart (add items, clear cart) without prop drilling.
 * It includes the context definition, a custom hook for easy access, and the CartProvider component that manages the cart state.
 */

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

// Type for a single item in the cart, including quantity
type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

// Type for an item to be added (without quantity)
type Item = {
  id: number;
  title: string;
  price: number;
};

// The shape of the context value
type CartContextType = {
  cart: CartItem[]; // Array of items in the cart
  cartCount: number;
  addToCart: (item: Item) => void; // Function to add an item to the cart
  updateCart: (itemId: number, quantity: number) => void;
  emptyCart: () => void;
};

// Create the CartContext with undefined as default (enforces usage inside provider)
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to access the cart context safely
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

// Props type for the CartProvider (expects children)
type CartProviderProps = {
  children: ReactNode;
};

/**
 * CartProvider component
 * - Holds the cart state and provides addToCart and clearCart functions.
 * - Wrap your app with <CartProvider> in App.tsx to make cart state available everywhere.
 */
export const CartProvider = (props: CartProviderProps) => {
  // State to hold the cart items (load from localStorage if present)
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Calculate the total number of items in the cart across all products
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Function to add an item to the cart (adds a new item with quantity 1 each time)
  const addToCart = (item: Item) => {
    // todo: enhance to increase quantity if item already exists
    setCart((existingCart: CartItem[]) => {
      // Check if the item already exists in the cart
      const existingItem = existingCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return existingCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...existingCart, { ...item, quantity: 1 }];
    });
  };

  const updateCart = (itemId: number, newQuantity: number) => {
    setCart((existingCart: CartItem[]) => {
      return existingCart
        .map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0); // remove if quantity <= 0
    });
  };

  const emptyCart = () => {
    setCart([]);
  };

  // Persist cart to localStorage whenever it changes (simple approach)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Provide cart state and functions to all children components
  return (
    <CartContext.Provider
      value={{ cart, cartCount, addToCart, updateCart, emptyCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

// Export the CartContext as default for potential direct use
export default CartContext;
