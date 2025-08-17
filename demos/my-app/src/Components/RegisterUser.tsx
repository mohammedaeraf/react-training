import { useState } from "react";

const RegisterUser = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  //   const [error, setError] = useState<string | null>(null);
  //   const [success, setSuccess] = useState<string | null>(null);

  //   const validateEmail = (email: string) =>
  //     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // +91-808809807

  const handleSubmit = () => {
    // setError(null);
    // setSuccess(null);
    // const name: string = " Aeraf    ";
    // console.log(name.trim());
    // if (fullName.trim().length == 0) {
    //   setError("Full name is required.");
    //   return;
    // }
    // if (email.trim().length == 0) {
    //   setError("Email is required.");
    //   return;
    // }
    // if (!validateEmail(email)) {
    //   setError("Invalid email format.");
    //   return;
    // }
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
    // setFullName("");
    // setEmail("");
    // setPassword("");
    // setConfirmPassword("");
  };

  return (
    <div className="container mt-4" style={{ maxWidth: 600 }}>
      <h2 className="mb-4">Register User</h2>
      {/* {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>} */}
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
        <button className="btn btn-primary w-100">Register</button>
      </div>
    </div>
  );
};

export default RegisterUser;
