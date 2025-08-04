# 🧑‍🏫 React Tutorial: Creating App Layout using Header, Nav, Footer Components

## 📦 1. Project Setup

```bash
npm create vite@latest react-layout-app --template react-ts
cd react-layout-app
npm install
npm install react-router-dom bootstrap
```

### ✅ Add Bootstrap (in `main.tsx`)

```tsx
// main.tsx
import "bootstrap/dist/css/bootstrap.min.css";
```

---

## 🗂️ 2. Project Structure

```
src/
│
├── components/
│   ├── Header.tsx
│   ├── NavBar.tsx
│   ├── Footer.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│
├── App.tsx
└── main.tsx
```

---

## 🧩 3. Create Components

### `Header.tsx`

```tsx
function Header() {
  return (
    <header className="bg-dark text-white text-center py-3">
      <h1>React Layout App</h1>
    </header>
  );
}
export default Header;
```

---

### `NavBar.tsx`

```tsx
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <NavLink to="/" className="navbar-brand">
        ReactApp
      </NavLink>
      <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
```

---

### `Footer.tsx`

```tsx
function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p>&copy; 2025 React Layout App</p>
    </footer>
  );
}
export default Footer;
```

---

## 📄 4. Pages

### `Home.tsx`

```tsx
function Home() {
  return <h2 className="text-center my-4">Welcome to the Home Page</h2>;
}
export default Home;
```

### `About.tsx`

```tsx
function About() {
  return <h2 className="text-center my-4">About Us</h2>;
}
export default About;
```

### `Contact.tsx`

```tsx
function Contact() {
  return <h2 className="text-center my-4">Contact Page</h2>;
}
export default Contact;
```

---

## 🧠 5. Setup Routing in `App.tsx`

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
```

---

## 🎯 Output

- A responsive layout with:

  - A sticky header
  - Navigation links that highlight when active
  - Footer across all pages
  - Page content rendered inside `<main>`

---

## 💡 Bonus Tips

- You can further improve this by:

  - Making layout components reusable in multiple apps.
  - Adding a layout wrapper component (like `MainLayout.tsx`) if needed.
  - Using context to manage theme or auth.
