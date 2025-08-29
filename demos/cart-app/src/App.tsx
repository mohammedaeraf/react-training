import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./components/Cart";
import AddressForm from "./components/AddressForm";
import OrderPlaced from "./components/OrderPlaced";
import Navbar from "./components/Navbar";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/address" element={<AddressForm />} />
          <Route path="/order" element={<OrderPlaced />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
