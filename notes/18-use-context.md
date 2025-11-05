## 🔍 React `useContext` Hook

### 🧠 What is `useContext`?

The `useContext` hook in React is used to **access global data (context)** in any component without having to pass props manually down the component tree.

It's ideal when:

- You want to **share state or data** across multiple components.
- You want to **avoid prop drilling** (passing props through many levels).

---

### 🧩 Common Use Cases

- Theme (dark/light)
- User authentication status
- Shopping cart
- Language settings

---

### ✅ Steps to Use `useContext`

1. Create a Context using `createContext`.
2. Provide it using `<Context.Provider>`.
3. Consume it using `useContext`.

These three concepts — `createContext`, `useContext`, and the **Context Provider** — are part of React’s **Context API**, which allows you to **share data globally** across your app **without passing props manually at every level**.

---

### 🎯 Why Use Context?

Imagine you have a theme setting (like Light/Dark mode) or a logged-in user’s info. Without Context, you'd have to pass that data down from parent to child to grandchild via props — which is painful and repetitive.
**React Context API helps solve this!**

---

## 🔧 1. `createContext()`

This creates the **Context object**. Think of it like creating a “global storage” or “bucket” that your app can read from or write to.

```tsx
import { createContext } from "react";

const ThemeContext = createContext("light");
```

You’ll then use this `ThemeContext` to wrap parts of your app that need access to the theme.

---

## 🧩 2. `Context.Provider`

The **Provider** component allows you to **supply a value** to the context. Components inside this Provider can **access the value using `useContext`**.

```tsx
<ThemeContext.Provider value="dark">
  <MyComponent />
</ThemeContext.Provider>
```

So now, `MyComponent` and its children can access the value `"dark"` from the context.

---

## 🧲 3. `useContext()`

This is the hook that lets you **consume the context value** from anywhere inside the component tree that is wrapped in the Provider.

```tsx
import { useContext } from "react";

const theme = useContext(ThemeContext);
```

Now the component knows whether the theme is `"dark"` or `"light"`.

---

### 🧠 Putting It All Together

```tsx
// ThemeContext.tsx
import { createContext } from "react";

export const ThemeContext = createContext("light");
```

```tsx
// App.tsx
import { ThemeContext } from "./ThemeContext";
import ThemedComponent from "./ThemedComponent";

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}
```

```tsx
// ThemedComponent.tsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <div>The current theme is: {theme}</div>;
}
```

---

### ✅ Summary

| Concept            | Purpose                                              |
| ------------------ | ---------------------------------------------------- |
| `createContext`    | Creates the context to share data                    |
| `Context.Provider` | Wraps components and provides a value to the context |
| `useContext`       | Lets components **read** the context value easily    |

---

## **React Theme Toggle example** using **Bootstrap 5** to switch between **Light and Dark themes**.

### 🧩 Files Used:

- `ThemeContext.tsx` – Context and provider
- `App.tsx` – Wraps components and toggles Bootstrap classes
- `ThemeToggler.tsx` – Button to toggle theme
- `ThemedCard.tsx` – A Bootstrap card that reflects the theme

---

## ✅ 1. `ThemeContext.tsx`

```tsx
import { createContext } from "react";

export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export default ThemeContext;
```

---

## 🧩 2. `App.tsx`

```tsx
import { useState } from "react";
import ThemeContext, { Theme } from "./ThemeContext";
import ThemeToggler from "./ThemeToggler";
import ThemedCard from "./ThemedCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`min-vh-100 p-5 ${
          theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
        }`}
      >
        <div className="container">
          <h1 className="mb-4">React Theme Toggle using Bootstrap</h1>
          <ThemeToggler />
          <ThemedCard />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
```

---

## 🎛️ 3. `ThemeToggler.tsx`

```tsx
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`btn ${theme === "light" ? "btn-dark" : "btn-light"} mb-4`}
      onClick={toggleTheme}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
}

export default ThemeToggler;
```

---

## 🎨 4. `ThemedCard.tsx`

```tsx
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemedCard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`card ${
        theme === "dark" ? "bg-secondary text-white" : "bg-white text-dark"
      }`}
    >
      <div className="card-body">
        <h5 className="card-title">Themed Card</h5>
        <p className="card-text">
          This card changes appearance based on the current Bootstrap theme!
        </p>
      </div>
    </div>
  );
}

export default ThemedCard;
```

---

### 🧪 Result:

- **Light Mode** uses Bootstrap `bg-light` and `text-dark`
- **Dark Mode** switches to `bg-dark`, `text-light`, `btn-light`, etc.
- Fully Bootstrap styled, responsive and clean!

---

### ✅ Requirements

Make sure you have **Bootstrap** installed:

```bash
npm install bootstrap
```

And import it in your `main.tsx` or `App.tsx`:

```ts
import "bootstrap/dist/css/bootstrap.min.css";
```

---

## 📝 Summary

| Concept        | useContext Hook                  |
| -------------- | -------------------------------- |
| Purpose        | Share data without prop drilling |
| Syntax         | `useContext(MyContext)`          |
| Best With      | Context + Provider               |
| Alternative To | Redux (for small-medium apps)    |
