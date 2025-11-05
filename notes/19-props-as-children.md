# 🧑‍🏫 Tutorial: Passing Props as Children in React

In React, **`props.children`** is a special prop that allows you to pass elements/components between opening and closing tags of a component.

This is useful when you want a component to act like a **container or wrapper**.

---

## Step 1: Create a `Box` Component

```jsx
// Box.js
function Box(props) {
  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
      {props.children}
    </div>
  );
}

export default Box;
```

👉 Here, `props.children` means:

* Anything placed **inside `<Box> ... </Box>`** will appear here.
* The `Box` just provides a styled container.

---

## Step 2: Use the `Box` Component

```jsx
// App.js
import Box from "./Box";

function App() {
  return (
    <div>
      {/* Passing simple text */}
      <Box>Hello World</Box>

      {/* Passing multiple elements */}
      <Box>
        <p>This is inside a box.</p>
        <button>Click Me</button>
      </Box>
    </div>
  );
}

export default App;
```

---

## Step 3: What Happens in the Browser?

* First `Box` shows just:

```
Hello World
```

inside a blue bordered box.

* Second `Box` shows:

```
This is inside a box.
[Click Me]
```

also wrapped inside a blue bordered box.

---

## Why Use `props.children`?

✅ Makes components **reusable** → You don’t have to decide the content in advance.
✅ Good for **layouts/wrappers** like cards, modals, sidebars.
✅ Keeps code **cleaner and flexible**.

---

## Quick Example: A Card

```jsx
function Card(props) {
  return (
    <div style={{ border: "1px solid gray", padding: "15px", borderRadius: "5px" }}>
      {props.children}
    </div>
  );
}

export default Card;
```

Usage:

```jsx
<Card>
  <h3>Welcome</h3>
  <p>This is a reusable card component.</p>
</Card>
```
