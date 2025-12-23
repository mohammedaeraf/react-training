import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartContext = useCart();

  const total = cartContext.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartContext.cart.length === 0)
    return <div className="alert alert-info mt-4">Your cart is empty.</div>;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="mb-0">🛒 Your Cart</h3>
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
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() =>
                      cartContext.updateCart(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    –
                  </button>
                  <span className="px-3 d-flex align-items-center">
                    {item.quantity}
                  </span>
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
              <td className="text-end">${item.price}</td>
              <td className="text-end">${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center mt-3">
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
