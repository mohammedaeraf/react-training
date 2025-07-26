## 📘 Tutorial: Display Courses in a Bootstrap List Group in React

✅ With `map()` Function Explanation

---

### 🎯 **Objective**

Create a React component named `Courses` that displays a list of course names using a **Bootstrap List Group**, and understand how the `map()` function is used to render each course dynamically.

---

### 🧩 Step 1: Create the `Courses` Component

📄 File: `src/components/Courses.tsx`

```tsx
function Courses() {
  // Static array of course names
  let courses = [
    "Frontend React",
    "Advanced Web Design",
    "Canva",
    "Python",
    "Full Stack - MERN",
    "Express JS / Mongo DB",
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-warning">List of Courses</h2>

      {/* Bootstrap List Group */}
      <ul className="list-group">
        {/* Use map() to loop through courses and create <li> elements */}
        {courses.map((course) => (
          <li className="list-group-item">{course}</li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
```

---

### 🧠 Explanation: How `map()` Works in This Example

```tsx
{
  courses.map((course, index) => (
    <li className="list-group-item" key={index}>
      {course}
    </li>
  ));
}
```

- `courses.map(...)` is used to **loop through each item** in the `courses` array.
- For each `course`, it returns a new `<li>` element with the course name.
- This method dynamically creates a list item (`<li>`) for every course in the array.

✅ This is the **React way of looping** through arrays to render UI elements.

---

### 💡 Step 2: Use the Component in App

```tsx
// src/App.tsx
import Courses from "./components/Courses";

function App() {
  return (
    <div>
      <Courses />
    </div>
  );
}

export default App;
```

---

### 🎨 Step 3: Add Bootstrap (If Not Already Installed)

```bash
npm install bootstrap
```

Then import it in `main.tsx` or `index.tsx`:

```tsx
import "bootstrap/dist/css/bootstrap.min.css";
```

---

### ✅ Output

You will see:

- A heading: **List of Courses**
- A neat **Bootstrap-styled list** showing:

  - Frontend React
  - Advanced Web Design
  - Canva
  - Python
  - Full Stack - MERN
  - Express JS / Mongo DB
