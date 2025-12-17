/**
 * AddressForm.tsx
 *
 * Enhanced with multiple address fields and professional Bootstrap layout
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface AddressData {
  street: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

const AddressForm = () => {
  const [address, setAddress] = useState<AddressData>({
    street: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (field: keyof AddressData, value: string) => {
    setAddress((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validate required fields
    if (
      !address.street.trim() ||
      !address.city.trim() ||
      !address.state.trim() ||
      !address.zipCode.trim() ||
      !address.country.trim()
    ) {
      setError("Please fill in all required fields");
      return;
    }

    setError(null);

    // Save the complete address
    localStorage.setItem("orderAddress", JSON.stringify(address));
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

          {/* Error Message */}
          {error && (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              {error}
              <button
                type="button"
                className="btn-close"
                onClick={() => setError(null)}
                aria-label="Close"
              ></button>
            </div>
          )}

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
                <select
                  className="form-select"
                  id="country"
                  value={address.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  required
                >
                  <option value="">Select Country</option>
                  <option value="India" selected>
                    India
                  </option>
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
