import { useCart } from "../Contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  // Access the cart array from the CartContext using the custom hook
  const { cart } = useCart();
  // Calculate the total price of all items in the cart
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // If the cart is empty, show a message and return early
  if (cart.length === 0)
    return <div className="alert alert-info mt-4">Your cart is empty.</div>;

  return (
    <div className="container mt-4">
      <h3>Your Cart</h3>
      {/* List of cart items */}
      <ul className="list-group mb-3">
        {cart.map((item) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={item.id}
          >
            {/* Show item name and quantity */}
            <span>
              {item.name} x {item.quantity}
            </span>
            {/* Show total price for this item */}
            <span>${item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      {/* Display the total price for all items */}
      <h5>Total: ${total}</h5>
      {/* Button to proceed to the address page */}
      <Link to="/address" className="btn btn-primary mt-2">
        Proceed to Address
      </Link>
    </div>
  );
};
export default Cart;
