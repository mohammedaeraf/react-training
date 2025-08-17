# 🔹 Tutorial: Understanding `useReducer` in React

React gives us two main hooks for managing state:

* **`useState`** → simple state management
* **`useReducer`** → when state logic is complex, or when multiple state updates depend on each other

---

## 1. What is `useReducer`?

`useReducer` is a React hook that helps manage **complex state logic** using a **reducer function**.

Think of it like:

> You have a **state object** 🗂 and an **action** 🎬 that tells React **how to change the state**.

---

## 2. Syntax

```tsx
const [state, dispatch] = useReducer(reducer, initialState);
```

* **`reducer`** → A function `(state, action) => newState`
* **`initialState`** → Starting state value
* **`state`** → Current state
* **`dispatch`** → Function to send actions that update state

---

## 3. Example 1: Simple Counter (useState vs useReducer)

### Using `useState`:

```tsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
```

This works fine. But what if we want **more control**?

---

### Using `useReducer`:

```tsx
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
```

✅ Here, instead of directly setting state, we **dispatch actions**.
This makes the logic more structured.

---

## 4. Why Use `useReducer`?

Use `useReducer` when:

* State updates are **complex** (multiple conditions).
* You want **centralized state logic** (all in one place).
* You need better **debugging** (actions are explicit).

---

## 5. Example 2: Managing a Todo List

```tsx
import React, { useReducer, useState } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload }];
    case "delete":
      return state.filter(todo => todo.id !== action.payload);
    case "clear":
      return [];
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    dispatch({ type: "add", payload: input });
    setInput("");
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={() => dispatch({ type: "clear" })}>Clear All</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => dispatch({ type: "delete", payload: todo.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

✅ Now our state logic (add, delete, clear) is **all inside the reducer**.
✅ Components stay **clean and focused**.

---

## 6. Key Takeaways

* **`useState`** → Best for simple state (counter, toggles, input).
* **`useReducer`** → Best for complex state logic (forms, todo lists, multiple actions).
* Reducer centralizes logic → easier debugging & maintenance.
* Dispatch sends actions → makes code predictable and structured.