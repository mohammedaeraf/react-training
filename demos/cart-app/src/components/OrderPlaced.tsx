/**
 * OrderPlaced.tsx
 *
 * Purpose:
 * This component displays a confirmation message after the user places an order.
 * It shows the delivery address, thanks the user, and ensures the cart is cleared.
 * If there is no address or the cart is empty, it redirects the user appropriately.
 */

import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";

type AddressData = {
  street: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

const OrderPlaced = () => {
  // Holds the address loaded from a previous step (saved under "orderAddress").
  // If null, we show a message telling the user to complete the address form.
  const [address, setAddress] = useState<AddressData | null>(null);
  const { emptyCart } = useCart();

  useEffect(() => {
    // This effect runs once on mount to:
    // 1) read the saved address from localStorage and set it so the UI can render it
    // 2) place the order (simple demo POST) and clean up localStorage afterwards
    // 3) clear the in-memory cart via `emptyCart()` so other parts of the app reflect the cleared state
    const storedAddress = localStorage.getItem("orderAddress");

    if (storedAddress) {
      const parsedAddress: AddressData = JSON.parse(storedAddress);
      setAddress(parsedAddress);
    }

    // NOTE: we call emptyCart() here to ensure the UI no longer shows items —
    // in a real app, consider clearing the cart only after the order is successfully created,
    // to avoid losing the user's cart if the API call fails.
    emptyCart();

    // Simple demo API call to create the order. This is intentionally minimal:
    // - No loading or error state is handled here
    // - The network call is performed with `fetch` (no retries/timeouts)
    // Improvements:
    // - Move the API call into a reusable function (e.g. `placeOrder`) so it can be tested and shared
    // - Use async/await and try/catch to manage errors and set UI state accordingly
    const storedCart = localStorage.getItem("cart");
    if (storedAddress && storedCart) {
      const parsedAddress: AddressData = JSON.parse(storedAddress);
      const parsedCart = JSON.parse(storedCart);

      // POST the cart + address to the backend. On success, remove persisted checkout data.
      // This demo expects a 2xx response to indicate success.
      fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart: parsedCart, address: parsedAddress }),
      })
        .then((res) => {
          if (res.ok) {
            // On success remove persisted cart and address so the checkout flow resets.
            localStorage.removeItem("cart");
            localStorage.removeItem("orderAddress");
          } else {
            // For clarity: log non-OK responses. In production surface a user-visible error instead.
            // eslint-disable-next-line no-console
            console.warn("Order API returned non-OK status", res.status);
          }
        })
        .catch((err) => {
          // Network error handling: log and consider surfacing to the user with state
          // eslint-disable-next-line no-console
          console.error("Failed to place order", err);
        });
    }
  }, []);

  if (!address) {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning">
          <h4>No Address Found</h4>
          <p>Please complete the address form to proceed with your order.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white">
              <h3 className="fw-bold mb-0">Order Confirmation</h3>
            </div>
            <div className="card-body">
              <h5 className="fw-semibold mb-3">Delivery Address</h5>

              <div className="bg-light p-3 rounded">
                <p className="mb-1">
                  <strong>Street:</strong> {address.street}
                </p>
                {address.apartment && (
                  <p className="mb-1">
                    <strong>Apartment:</strong> {address.apartment}
                  </p>
                )}
                <p className="mb-1">
                  <strong>City:</strong> {address.city}
                </p>
                <p className="mb-1">
                  <strong>State:</strong> {address.state}
                </p>
                <p className="mb-1">
                  <strong>ZIP Code:</strong> {address.zipCode}
                </p>
                <p className="mb-0">
                  <strong>Country:</strong> {address.country}
                </p>
              </div>

              <div className="mt-4">
                <button
                  className="btn btn-success"
                  onClick={() => window.print()}
                >
                  Print Confirmation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
