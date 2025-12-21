/**
 * CartContext.tsx
 *
 * Purpose:
 * This file defines the Cart Context for the CartApp. It provides a global state for the shopping cart,
 * allowing any component in the app to access and modify the cart (add items, clear cart) without prop drilling.
 * It includes the context definition, a custom hook for easy access, and the CartProvider component that manages the cart state.
 */

import { createContext, useContext, useState, type ReactNode } from "react";

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
};

// Create the CartContext with undefined as default (enforces usage inside provider)
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to access the cart context safely
export const useCart = () => {
  return useContext(CartContext);
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
  // State to hold the cart items
  const [cart, setCart] = useState<CartItem[]>([]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Function to add an item to the cart (or increase quantity if it exists)
  const addToCart = (item: Item) => {
    setCart((existingCart: CartItem[]) => [...existingCart, { ...item, quantity: 1 }]);
  };

  // Provide cart state and functions to all children components
  return (
    <CartContext.Provider
      value={{ cart, cartCount, addToCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
