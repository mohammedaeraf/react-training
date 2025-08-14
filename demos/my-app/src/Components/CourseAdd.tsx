import { useState } from "react";
import { useNavigate } from "react-router-dom";

// API endpoint for courses resource on MockAPI
const API_URL = "https://67a75555203008941f674e2f.mockapi.io/courses";

const CourseAdd = () => {
  // State to store the course title input
  const [title, setTitle] = useState<string>("");
  // State to store the course description input
  const [description, setDescription] = useState<string>("");

  // Hook to navigate to a different route after adding a course
  const navigate = useNavigate();

  // Function to add a new course by sending a POST request to the API
  const addCourse = async () => {
    // Create a course object from the input fields
    const course = {
      title,
      description,
    };

    // Send POST request to add the course
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });

    // Navigate back to the courses list after adding
    navigate("/courses");
  };

  return (
    <div className="container">
      <h2 className="text-primary my-4">Add Course</h2>
      {/* Form to add a new course */}
      <div id="addCourseform" className="border border-1 rounded shadow p-4">
        {/* Input for course title */}
        <div className="mb-4">
          <label htmlFor="titleTextBox" className="form-label fw-bold">
            Course Title
          </label>
          <input
            type="text"
            id="titleTextBox"
            className="form-control"
            placeholder="Enter Course Title like Java, Python, React, etc"
            value={title}
            onChange={(event) => setTitle(event.target.value)} // Update title state on change
          />
        </div>
        {/* Input for course description */}
        <div className="mb-4">
          <label htmlFor="descriptionTextBox" className="form-label fw-bold">
            Course Description
          </label>
          <input
            type="text"
            id="descriptionTextBox"
            className="form-control"
            placeholder="Enter Course Description such as topics"
            value={description}
            onChange={(event) => setDescription(event.target.value)} // Update description state on change
          />
        </div>
        {/* Button to add the course */}
        <div className="mt-5">
          <button className="btn btn-primary w-100" onClick={() => addCourse()}>
            Add Course
          </button>
        </div>
      </div>
    </div>
  );
};
export default CourseAdd;
