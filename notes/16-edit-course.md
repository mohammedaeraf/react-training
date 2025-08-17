# ✏️ Tutorial: Implementing "Edit Course" in React with MockAPI

In this tutorial, we’ll learn how to edit a course from an API using React, React Router, and Bootstrap.

We’ll:

1. Fetch the course by its ID.
2. Display a form pre-filled with its details.
3. Allow users to update the course.
4. Send the update to the API.
5. Show success/error messages.

---

## 1. Setup

We assume you already have:

* A React app created (`npx create-react-app myapp --template typescript`)
* `react-router-dom` installed
* A **MockAPI.io** resource named `courses` with fields:

  * `id` (string)
  * `title` (string)
  * `description` (string)

---

## 2. Course Interface

We define a TypeScript interface for type safety:

```tsx
interface Course {
  id: string;
  title: string;
  description: string;
}
```

---

## 3. Component Skeleton

We create `CourseEdit.tsx` in `src/`:

```tsx
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

interface Course {
  id: string;
  title: string;
  description: string;
}

const API_URL = "https://your-mockapi-url/courses";

const CourseEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // read course ID from URL
  const navigate = useNavigate();

  const [course, setCourse] = useState<Course | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  // fetch course when component loads
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error("Failed to fetch course");
        const data = await response.json();
        setCourse(data);
      } catch {
        setError("❌ Could not load course details.");
      }
    };
    fetchCourse();
  }, [id]);
```

---

## 4. Update Handler

```tsx
  const handleUpdate = async () => {
    if (!course) return;
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      });
      if (!response.ok) throw new Error("Update failed");

      setMessage("✅ Course updated successfully!");
      setTimeout(() => navigate("/courses"), 1500); // redirect after update
    } catch {
      setError("❌ Failed to update course.");
    }
  };
```

---

## 5. Render Form

```tsx
  if (error) return <p className="text-danger">{error}</p>;
  if (!course) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>✏ Edit Course</h2>
      {message && <p className="text-success">{message}</p>}

      <div className="border p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={course.title}
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </div>
        <button className="btn btn-primary" onClick={handleUpdate}>
          Update
        </button>
        <Link to="/courses" className="btn btn-secondary ms-2">
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default CourseEdit;
```

---

## 6. Add Route

In your `App.tsx` (or router file), add:

```tsx
import CourseEdit from "./CourseEdit";

<Routes>
  <Route path="/courses/:id/edit" element={<CourseEdit />} />
</Routes>
```

---

## 7. Trigger Edit

In your course listing table, add an **Edit button** that links to `/courses/:id/edit`. Example:

```tsx
<Link to={`/courses/${course.id}/edit`} className="btn btn-warning btn-sm">
  Edit
</Link>
```

---

## ✅ Summary

* Used **`useParams`** to grab the course ID from the URL.
* Used **`useEffect`** to fetch course details when the page loads.
* Bound input fields to `course` state for editing.
* Implemented `handleUpdate()` to send `PUT` request to MockAPI.
* Redirected to course list after update.