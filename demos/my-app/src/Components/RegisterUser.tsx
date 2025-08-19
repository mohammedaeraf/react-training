import { useState } from "react";

const RegisterUser = () => {
  const [fullName, setFullName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const validateEmail = (email: string) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const handleSubmit = () => {
    console.log("Handle Submit Called..");
    setError(null);
    setSuccess(null);

    if (fullName.trim().length == 0) {
      setError("Full name cannot be left blank");
      return;
    }

    if (email.trim().length == 0) {
      setError("Email cannot be left blank");
      return;
    }

    let validEmail: boolean = validateEmail(email);

    if (!validEmail) {
      setError("Email is not in correct format");
      return;
    }

    if (password.trim().length < 6) {
      setError("Password cannot be less than 6 chars");
      return;
    }

    // if (confirmPassword.trim().length < 6) {
    //   setError("Confirm Password cannot be less than 6 chars");
    //   return;
    // }

    if (confirmPassword != password) {
      setError("Password and Confirm Password do not match");
      return;
    }

    setSuccess("You have registered successfully!");

    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");


    // TODO: Write code to post data to API

    // if (!password) {
    //   setError("Password is required.");
    //   return;
    // }
    // if (password.length < 6) {
    //   setError("Password must be at least 6 characters.");
    //   return;
    // }
    // if (password !== confirmPassword) {
    //   setError("Passwords do not match.");
    //   return;
    // }
    // // TODO - add code to call POST API
    // setSuccess("Registration successful!");
    
  };

  return (
    <div className="container mt-4" style={{ maxWidth: 600 }}>
      <h2 className="mb-4">Register User</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      {success && <div className="alert alert-success">{success}</div>}

      <div className="border p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            className="form-control"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
          />
        </div>
        <button className="btn btn-primary w-100" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterUser;
