# 📝 Tutorial: Adding a New Course in React

In this tutorial, we will learn how to add a new course into our Courses App. We’ll create an **Add Course form**, connect it to **mockapi.io**, and then redirect users back to the course list.

---

## 🎯 Learning Goals

* Create a form for adding a new Course
* Use `useState` to manage form inputs
* Send a `POST` request to `mockapi.io`
* Redirect to the course list after adding a new Course

---

## 📂 Step 1: Create `CourseAdd.tsx`

Inside your `src/components/` folder, create a new file called **CourseAdd.tsx**.

```tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CourseAdd: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newCourse = { title, description };

    // send data to mockapi.io
    await fetch("https://<your-mockapi-url>/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCourse),
    });

    // go back to Course List
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default CourseAdd;
```

---

## 📂 Step 2: Update `App.tsx` Routes

In `App.tsx`, add a route for the **Add Course** page.

```tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseList from "./components/CourseList";
import CourseAdd from "./components/CourseAdd";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/add" element={<CourseAdd />} />
      </Routes>
    </Router>
  );
}

export default App;
```

---

## 📂 Step 3: Add “Add Course” Button in Course List

In `CourseList.tsx`, add a button that links to the Add Course page.

```tsx
import { Link } from "react-router-dom";

<Link to="/add" className="btn btn-success mb-3">
  Add Course
</Link>
```

---

## ✅ Step 4: Test It

1. Start your React app (`npm start` or `yarn start`).
2. Click **Add Course** button.
3. Fill the form and click **Add Course**.
4. You should be redirected back to the list, and your new Course will appear.

---

## 🎓 Key Takeaways

* Use `useState` to manage form fields.
* Use `fetch` with `POST` to add data to an API.
* Use `useNavigate` from `react-router-dom` for redirection.