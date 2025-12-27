/*
 * Cart.tsx
 *
 * Purpose:
 * A UI that displays the current shopping cart using values from `useCart()`.
 * - Shows a list of products, quantity controls, per-item subtotal, and overall total.
 * - Allows clearing the entire cart (with confirmation) and adjusting item quantities.
 *
 * Notes:
 * - This component intentionally reads and updates cart state via the CartContext
 *   to avoid prop drilling. Mutating operations are performed through `updateCart` and `emptyCart`.
 */

import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  // Get cart helpers and state from the context
  const cartContext = useCart();

  // Compute the total cost by summing price * quantity for each item
  // Using reduce keeps the calculation pure and derived from current state.
  const total = cartContext.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Early return: show a simple message when the cart is empty.
  // This keeps the rest of the component focused on rendering a populated cart.
  if (cartContext.cart.length === 0)
    return <div className="alert alert-info mt-4">Your cart is empty.</div>;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="mb-0">🛒 Your Cart</h3>

        {/*
          Clear cart button:
          - Uses window.confirm for a quick confirmation prompt.
          - Calls `emptyCart()` from context which also persists the change (via context effect).
          - The `aria-label` and `title` improve accessibility and discoverability.
        */}
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          aria-label="Clear cart"
          title="Clear cart"
          onClick={() => {
            if (window.confirm("Are you sure you want to clear the cart?")) {
              cartContext.emptyCart();
            }
          }}
        >
          <i className="bi bi-trash me-2" aria-hidden="true"></i>
          <span className="d-none d-md-inline">Clear</span>
        </button>
      </div>

      {/*
        Cart table:
        - Lists items, quantity controls, item price, and a computed subtotal.
        - Quantity controls call `updateCart(id, quantity)` which centralizes logic in context.
        - The decrement button is disabled when quantity <= 1 to avoid negative counts.
      */}
      <table className="table table-bordered align-middle">
        <thead className="table-light">
          <tr>
            <th>Product</th>
            <th className="text-center">Quantity</th>
            <th className="text-end">Price</th>
            <th className="text-end">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartContext.cart.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td className="text-center">
                <div className="btn-group" role="group">
                  {/* Decrease quantity: will not go below 1 due to disabled prop */}
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() =>
                      cartContext.updateCart(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    –
                  </button>

                  {/* Current quantity (read-only in this control) */}
                  <span className="px-3 d-flex align-items-center">
                    {item.quantity}
                  </span>

                  {/* Increase quantity */}
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() =>
                      cartContext.updateCart(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </td>

              {/* Prices and subtotal are displayed as simple numbers. For production apps, use a helper to format currency. */}
              <td className="text-end">${item.price}</td>
              <td className="text-end">${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer: total and navigation actions */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        {/* Format total to 2 decimal places for a consistent display */}
        <h5>Total: ${total.toFixed(2)}</h5>
        <div>
          <Link to="/" className="btn btn-warning me-4">
            Continue Shopping
          </Link>
          <Link to="/address" className="btn btn-primary">
            Proceed to Address
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
