/**
 * AddressForm.tsx
 *
 * Purpose:
 * This component collects the user's delivery address as part of the checkout process.
 * It validates that the address is not empty, displays an error if needed,
 * and saves the address to localStorage before navigating to the order confirmation page.
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddressForm = () => {
  // State to store the address input by the user
  const [address, setAddress] = useState("");
  // State to store any validation error message
  const [error, setError] = useState<string | null>(null);
  // Hook to programmatically navigate to another route
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate that the address is not empty
    if (!address.trim()) {
      setError("Address is required");
      return;
    }
    setError(null);
    // Save the address to localStorage for later use (e.g., order summary)
    localStorage.setItem("orderAddress", address);
    // Navigate to the order confirmation page
    navigate("/order");
  };

  return (
    <div className="container mt-4">
      <h3>Enter Delivery Address</h3>
      {/* Show error message if validation fails */}
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        {/* Textarea for user to enter their address */}
        <textarea
          className="form-control mb-3"
          rows={3}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
        />
        {/* Submit button to place the order */}
        <button className="btn btn-success" type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
