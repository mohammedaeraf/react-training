import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ProfileCard from "./Components/ProfileCard";
import Product from "./Components/Product";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand bg-dark p-3">
        <Link to="/" className="btn btn-outline-light m-1">
          Home
        </Link>
        <Link to="/about" className="btn btn-outline-light m-1">
          About
        </Link>
        <Link to="/contact" className="btn btn-outline-light m-1">
          Contact
        </Link>
        <Link to="/profile" className="btn btn-outline-light m-1">
          View My Profile
        </Link>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/profile"
            element={
              <ProfileCard
                name="Usman Ghani"
                role="UI/UX Designer"
                skills={["HTML", "CSS"]}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
