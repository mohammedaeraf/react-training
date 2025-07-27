## 📘 Tutorial: Understanding `useState` in React

### 🎯 **Objective:**

Learn how to use the `useState` hook to manage state in functional components.

---

## 🔍 What is `useState`?

In React, **`useState`** is a **Hook** that lets you add **state** to a **functional component**.

Before Hooks, state could only be used in class components. Now, you can use it easily in functions.

---

## ✨ Syntax

```js
const [stateVariable, setStateFunction] = useState(initialValue);
```

- `stateVariable`: The current value of the state
- `setStateFunction`: A function used to update the state
- `initialValue`: The initial value of the state

---

## 📌 Example 1: Counter

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

### ✅ Explanation:

- `useState(0)` initializes `count` to 0
- `setCount(count + 1)` increases the count
- React re-renders the component when state changes

---

## 📌 Example 2: Toggle Message

```jsx
import { useState } from "react";

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {isVisible ? <p>Hello, this is a message!</p> : <p></p>}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default ToggleMessage;
```

### ✅ Explanation:

- Initially, the message is visible.
- Clicking the button toggles the visibility using `setIsVisible`.

---

## 📌 Example 3: Input Field

```jsx
import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is: {name}</p>
    </div>
  );
}

export default NameInput;
```

### ✅ Explanation:

- `name` holds the input field value.
- `setName()` updates the state as the user types.

---

## 🔄 Summary

| Feature       | Description                                |
| ------------- | ------------------------------------------ |
| useState      | Adds state to a functional component       |
| Initial Value | Passed to `useState()`                     |
| setState      | Used to update state and trigger re-render |

---

## 🧠 Common Mistakes to Avoid

- Not calling the setter function (`setState`) to update state
- Trying to mutate the state variable directly
- Using the same name for state and setter function
