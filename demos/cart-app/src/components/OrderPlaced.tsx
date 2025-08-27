/**
 * OrderPlaced.tsx
 *
 * Purpose:
 * This component displays a confirmation message after the user places an order.
 * It shows the delivery address, thanks the user, and ensures the cart is cleared.
 * If there is no address or the cart is empty, it redirects the user appropriately.
 */

import { useCart } from "../contexts/CartContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderPlaced = () => {
  // Access cart state and clearCart function from context
  const { cart, clearCart } = useCart();
  // Hook to programmatically navigate to another route
  const navigate = useNavigate();
  // Retrieve the delivery address from localStorage
  const address = localStorage.getItem("orderAddress");

  useEffect(() => {
    // If the cart is empty, redirect to the home page
    if (cart.length === 0) {
      navigate("/");
    }
    // Clear the cart after placing the order
    clearCart();
    // eslint-disable-next-line
  }, []);

  // If no address is found, show a warning message
  if (!address) {
    return <div className="alert alert-warning mt-4">No address found.</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-success">Order Placed!</h2>
      <p>Your order will be delivered to:</p>
      <div className="alert alert-info">{address}</div>
      <p>Thank you for shopping with us!</p>
    </div>
  );
};

export default OrderPlaced;
