import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./Contexts/CartContext";
import Products from "./Components/Products";
// import Cart from "./Components/Cart";
// import AddressForm from "./Components/AddressForm";
// import OrderPlaced from "./Components/OrderPlaced";

function App() {
  return (
    <CartProvider>
      <Router>
        <nav className="navbar navbar-expand navbar-light bg-light px-3">
          <Link className="navbar-brand" to="/">
            Shop
          </Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Products
            </Link>
            {/* <Link className="nav-link" to="/cart">
              Cart
            </Link> */}
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Products />} />
          {/* <Route path="/cart" element={<Cart />} />
          <Route path="/address" element={<AddressForm />} />
          <Route path="/order" element={<OrderPlaced />} /> */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
