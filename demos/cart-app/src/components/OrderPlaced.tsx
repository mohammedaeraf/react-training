/**
 * OrderPlaced.tsx
 *
 * Purpose:
 * This component displays a confirmation message after the user places an order.
 * It shows the delivery address, thanks the user, and ensures the cart is cleared.
 * If there is no address or the cart is empty, it redirects the user appropriately.
 */

import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

// OrderConfirmation.tsx
import { useEffect, useState } from "react";

interface AddressData {
  street: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

const OrderPlaced = () => {
  const [address, setAddress] = useState<AddressData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve address from localStorage
    const storedAddress = localStorage.getItem("orderAddress");

    if (storedAddress) {
      try {
        const parsedAddress: AddressData = JSON.parse(storedAddress);
        setAddress(parsedAddress);
      } catch (error) {
        console.error("Error parsing address from localStorage:", error);
        // Handle legacy format (if you previously stored as plain string)
        setAddress({
          street: storedAddress,
          apartment: "",
          city: "",
          state: "",
          zipCode: "",
          country: "",
        });
      }
    }

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading order details...</p>
        </div>
      </div>
    );
  }

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

// const OrderPlaced = () => {
//   // Access cart state and clearCart function from context
//   const { cart, clearCart } = useCart();
//   // Hook to programmatically navigate to another route
//   const navigate = useNavigate();
//   // Retrieve the delivery address from localStorage
//   const address = localStorage.getItem("orderAddress");

//   useEffect(() => {
//     // If the cart is empty, redirect to the home page
//     if (cart.length === 0) {
//       navigate("/");
//     }
//     // Clear the cart after placing the order
//     clearCart();
//     // eslint-disable-next-line
//   }, []);

//   // If no address is found, show a warning message
//   if (!address) {
//     return <div className="alert alert-warning mt-4">No address found.</div>;
//   }

//   return (
//     <div className="container mt-4">
//       <h2 className="text-success">Order Placed!</h2>
//       <p>Your order will be delivered to:</p>
//       <div className="alert alert-info">{address}</div>
//       <p>Thank you for shopping with us!</p>
//     </div>
//   );
// };

export default OrderPlaced;
