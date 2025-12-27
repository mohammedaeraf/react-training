/**
 * AddressForm.tsx
 *
 * Purpose:
 * A controlled form component that collects the delivery address for an order.
 * - Uses local component state to manage form inputs and persists the completed address to localStorage on submit.
 * - After saving, the user is navigated to the order summary page (`/order`).
 *
 * Implementation notes:
 * - Fields are required where marked and basic HTML validation is used (required attributes).
 * - The component uses a simple save-to-localStorage strategy; in a real app this would call an API or update app state.
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

type AddressData = {
  street: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

const AddressForm = () => {
  // Default empty address object used to initialize the controlled form state.
  // Keeping a single shape here makes it easy to reset the form and ensures TypeScript safety.
  const blankAddress: AddressData = {
    street: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  };

  // Address state is a controlled object representing all form fields. Use `setAddress` to update a specific property.
  const [address, setAddress] = useState<AddressData>(blankAddress);

  const navigate = useNavigate();

  /**
   * handleInputChange(field, value)
   * - Generic updater for controlled inputs: takes the key of the address object and the new value.
   * - Uses functional setState to avoid stale closures when multiple updates happen quickly.
   */
  const handleInputChange = (field: keyof AddressData, value: string) => {
    setAddress((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /**
   * handleSubmit(event)
   * - Prevents default form submission and performs a side-effect: persist the completed address to localStorage.
   * - Navigates the user to `/order` where the address and cart will be used to create the final order.
   * - Note: this component relies on HTML `required` attributes for basic validation; for more complex rules, add explicit checks here and display helpful errors.
   */
  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Persist the address so the order summary can read it (simple client-side flow used for this demo)

    localStorage.setItem("orderAddress", JSON.stringify(address));
    // Move to the next step in the checkout flow
    navigate("/order");
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          {/* Header */}
          <div className="text-center mb-4">
            <h3 className="fw-bold text-dark">Delivery Address</h3>
            <p className="text-muted fs-6">
              Enter your complete delivery information
            </p>
          </div>

          {/* Address Form */}
          <form onSubmit={handleSubmit} className="card border-0 shadow-sm">
            <div className="card-body p-4">
              {/* Street Address */}
              <div className="mb-3">
                <label htmlFor="street" className="form-label fw-semibold">
                  Street Address <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="street"
                  value={address.street}
                  onChange={(e) => handleInputChange("street", e.target.value)}
                  placeholder="Azad Nagar 1st Cross"
                  required
                />
              </div>

              {/* Apartment/Unit */}
              <div className="mb-3">
                <label htmlFor="apartment" className="form-label fw-semibold">
                  Apartment, Suite, Unit (Optional)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="apartment"
                  value={address.apartment}
                  onChange={(e) =>
                    handleInputChange("apartment", e.target.value)
                  }
                  placeholder="Sameena Complex, 2nd Floor"
                />
              </div>

              {/* City, State, Zip Code Row */}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="city" className="form-label fw-semibold">
                    City <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    value={address.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    placeholder="Bhatkal"
                    required
                  />
                </div>

                <div className="col-md-3 mb-3">
                  <label htmlFor="state" className="form-label fw-semibold">
                    State <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    value={address.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    placeholder="Karnataka"
                    required
                  />
                </div>

                <div className="col-md-3 mb-3">
                  <label htmlFor="zipCode" className="form-label fw-semibold">
                    ZIP Code <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zipCode"
                    value={address.zipCode}
                    onChange={(e) =>
                      handleInputChange("zipCode", e.target.value)
                    }
                    placeholder="581320"
                    required
                  />
                </div>
              </div>

              {/* Country */}
              <div className="mb-4">
                <label htmlFor="country" className="form-label fw-semibold">
                  Country <span className="text-danger">*</span>
                </label>
                {/*
                  Country select (controlled):
                  - Because the select is controlled via `value={address.country}`, the `selected` attribute on options is unnecessary and should be removed.
                  - To default to a value (e.g., India) set it in the initial `blankAddress` instead of using `selected` here.
                */}
                <select
                  className="form-select"
                  id="country"
                  value={address.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  required
                >
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="UAE">UAE</option>
                  <option value="Saudi Arabic">Saudi Arabia</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  {/* Add more countries as needed */}
                </select>
              </div>

              {/* Submit Button */}
              <div className="d-grid">
                <button
                  className="btn btn-primary btn-lg fw-semibold"
                  type="submit"
                >
                  Continue to Order Summary
                </button>
              </div>
            </div>
          </form>

          {/* Optional: Progress indicator */}
          <div className="text-center mt-3">
            <small className="text-muted">
              Step 2 of 3 • Delivery Information
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
