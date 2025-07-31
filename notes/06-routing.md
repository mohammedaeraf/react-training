# 📘 Routing with `react-router-dom`

---

## 🎯 Objective

By the end of this tutorial, you'll learn how to:

* Set up **React Router** in your app
* Create **multiple pages/components**
* Use `<Routes>` and `<Route>` for navigation
* Implement **`Link`**, **`NavLink`**, and **404 Not Found** pages

---

## 🔧 Step 1: Install React Router

Open terminal in your React project directory and run:

```bash
npm install react-router-dom
```

If you're using **TypeScript**, also install the types:

```bash
npm install @types/react-router-dom
```

---

## 🗂 Step 2: Set Up Routes in `App.tsx`

### ✅ Example folder structure:

```
src/
│
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
│
├── App.tsx
└── main.tsx
```

---

## 📄 Step 3: Create Page Components

### `Home.tsx`

```tsx
function Home() {
  return <h2>Welcome to the Home Page</h2>;
}
export default Home;
```

### `About.tsx`

```tsx
function About() {
  return <h2>About Us</h2>;
}
export default About;
```

### `Contact.tsx`

```tsx
function Contact() {
  return <h2>Contact Us</h2>;
}
export default Contact;
```

### `NotFound.tsx`

```tsx
function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}
export default NotFound;
```

---

## 🧠 Step 4: Configure Routing in `App.tsx`

```tsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand bg-dark p-3">
        <Link to="/" className="btn btn-outline-light m-1">Home</Link>
        <Link to="/about" className="btn btn-outline-light m-1">About</Link>
        <Link to="/contact" className="btn btn-outline-light m-1">Contact</Link>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

---

## 🧭 Step 5: Launch App

```bash
npm run dev
# or
npm start
```

Open your browser and test navigation using the menu buttons.

---

## ✅ Bonus Tips

### 1. **NavLink** for Active Styling

```tsx
import { NavLink } from "react-router-dom";

<NavLink
  to="/about"
  className={({ isActive }) => (isActive ? "btn btn-primary" : "btn btn-outline-primary")}
>
  About
</NavLink>
```

### 2. **Route Parameters**

```tsx
<Route path="/product/:id" element={<ProductDetails />} />
```

Access with:

```tsx
import { useParams } from "react-router-dom";
const { id } = useParams();
```

---

## 🧠 Summary

| Feature            | Use                             |
| ------------------ | ------------------------------- |
| `BrowserRouter`    | Wraps the entire routing system |
| `Routes` & `Route` | Define paths and components     |
| `Link` / `NavLink` | Navigation without page reload  |
| `useParams`        | Read URL params                 |
| `useNavigate`      | Navigate programmatically       |
| `*` path           | Catch-all for 404 handling      |
