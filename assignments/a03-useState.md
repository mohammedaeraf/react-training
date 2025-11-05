## 🧑‍💻 Assignment 02 – `useState` Based Counter Component

### 🎯 Objective:

Create a **React functional component** called `Counter` that uses the `useState` hook to maintain and control a numeric counter value. Implement **both increment and decrement functionalities**, with validation to restrict the value between 0 and 10.

---

### 📌 Requirements:

1. **Component Name**: `Counter`
2. Use `useState` to define and manage the state variable `count`, initialized to `0`.
3. Display the current count on screen inside an `<h2>` element.
4. Add **two buttons**:

   - ✅ `Increment` – Increases count by 1, **but only if count is less than 10**.
   - 🔽 `Decrement` – Decreases count by 1, **but not below 0**.

5. Disable the `Increment` button when the count is 10.
6. Disable the `Decrement` button when the count is 0.
7. Add minimal styling using Bootstrap (optional but recommended).

---

### ✅ Expected Output:

```plaintext
Count: 4
[Decrement]  [Increment]
```

- If count = 0 → Decrement button is disabled
- If count = 10 → Increment button is disabled

---

### 💡 Hints:

- Use conditional rendering or the `disabled` attribute to control button states.
- You may use Bootstrap classes such as `btn`, `btn-primary`, `btn-secondary`, `m-2`, etc., for styling.

---

### 📁 Submission:

- File: `src/components/Counter.tsx` or `.jsx`
- Use this component inside `App.tsx` to test.
