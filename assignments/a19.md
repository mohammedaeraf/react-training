# 📝 Assignment: Change Theme using `useContext`

## 🎯 Objective

Create a small React app that demonstrates how to use **useContext** to manage global state. The app should allow the user to toggle between **Light Mode** and **Dark Mode** using a button inside a `Navbar`.

---

## ✅ Requirements

1. **Create a Theme Context**

   * Define a `ThemeContext` with two values: `"light"` and `"dark"`.
   * Provide the current theme and a function to toggle it.

2. **Create a ThemeProvider**

   * Wrap the app with `ThemeProvider` so that all components can access the theme.

3. **Navbar Component**

   * Display the app title.
   * Add a **button** inside the `Navbar` to toggle between Light and Dark themes.

4. **App Component**

   * Display some content (like a paragraph or a card).
   * Apply different styles based on the current theme.

---

## 🛠 Starter Code

```jsx
import React, { createContext, useContext, useState } from "react";

// 1. Create ThemeContext
const ThemeContext = createContext();

// 2. Create ThemeProvider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Navbar Component
const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        padding: "10px",
        backgroundColor: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <span>My App</span>
      <button
        onClick={toggleTheme}
        style={{ marginLeft: "20px", padding: "5px 10px" }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </nav>
  );
};

// App Component
const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
      }}
    >
      <Navbar />
      <h1>Welcome to Theme Switcher App</h1>
      <p>This is a simple example of using useContext in React.</p>
    </div>
  );
};

// Root Component
export default function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
```

---

## 🎓 Assignment Tasks for Students

1. Run the app and verify Light Mode is default.
2. Click the button in `Navbar` to toggle between Light and Dark themes.
3. Add one more component (e.g., `Footer`) that also reflects the current theme using `useContext`.
4. Bonus: Style the button differently in Light vs. Dark modes.
