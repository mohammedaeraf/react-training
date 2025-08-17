import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

// Define the shape of a Course object
interface Course {
  id: string;
  title: string;
  description: string;
}

// API endpoint for courses (replace with your own MockAPI.io URL if needed)
const API_URL = "https://67a75555203008941f674e2f.mockapi.io/courses";

const CourseEdit: React.FC = () => {
  // Get course ID from URL parameters
  const { id } = useParams<{ id: string }>();
  // Hook for navigation after update
  const navigate = useNavigate();
  // State to hold the course being edited
  const [course, setCourse] = useState<Course | null>(null);
  // State for error messages
  const [error, setError] = useState<string | null>(null);
  // State for success messages
  const [message, setMessage] = useState<string | null>(null);

  // Fetch course details from API
  const fetchCourse = async () => {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    setCourse(data);
  };

  // Fetch course when component mounts or when 'id' changes
  useEffect(() => {
    fetchCourse();
  }, [id]);

  // Handle form submission to update course
  const handleUpdate = async () => {
    if (!course) return;

    try {
      // Send PUT request to update course
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      });

      // If update fails, throw error
      if (!response.ok) throw new Error("Update failed");

      // Show success message and redirect after short delay
      setMessage("✅ Course updated successfully!");
      setTimeout(() => navigate("/courses"), 1500);
    } catch {
      // Show error message if update fails
      setError("❌ Failed to update course.");
    }
  };

  // Show error message if error exists
  if (error) return <p className="text-danger">{error}</p>;
  // Show loading message while fetching course
  if (!course) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      {/* Page heading */}
      <h2>✏ Edit Course</h2>
      {/* Show success message if present */}
      {message && <p className="text-success">{message}</p>}
      {/* Edit form */}
      <form className="border p-4 shadow-sm">
        <div className="mb-3">
          {/* Title input */}
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={course.title}
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
          />
        </div>
        <div className="mb-3">
          {/* Description textarea */}
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </div>
        {/* Update button triggers handleUpdate */}
        <button className="btn btn-primary" onClick={handleUpdate}>
          Update
        </button>
        {/* Cancel button navigates back to home */}
        <Link to="/" className="btn btn-secondary ms-2">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default CourseEdit;
