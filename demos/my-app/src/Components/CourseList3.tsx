import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Course {
  id: number;
  title: string;
  description: string;
}

const CourseList3 = () => {
  const API_URL: string = "https://67a75555203008941f674e2f.mockapi.io/courses";

  // API endpoint for managing courses
  const [courses, setCourses] = useState<Course[]>([]);

  // Modal visibility state and the currently selected course for deletion
  const [showConfirm, setShowConfirm] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState<Course | null>(null);

  // Fetch the list of courses from the API and update state
  const fetchCourses = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setCourses(data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Open the confirmation modal for the selected course
  const deleteCourse = (course: Course) => {
    setCourseToDelete(course);
    setShowConfirm(true);
  };

  // Close the confirmation modal and clear the selection
  const closeConfirm = () => {
    setCourseToDelete(null);
    setShowConfirm(false);
  };

  // Perform the DELETE request for the selected course, then refresh
  const confirmDelete = async () => {
    if (!courseToDelete) return;
    const deleteUrl = `${API_URL}/${courseToDelete.id}`;
    await fetch(deleteUrl, { method: "DELETE" });
    closeConfirm();
    fetchCourses(); // refresh the list
  };

  return (
    <div id="container">
      <h1 className="text-danger">Course List</h1>
      <Link to={`/add-course`} className="btn btn-primary my-3">
        <i className="bi-plus-circle me-2"></i>
        Add Course
      </Link>
      <table className="table table-striped table-hover">
        <thead>
          <tr className="table-dark">
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr>
              <th scope="row">{course.id}</th>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>
                <Link
                  to={`/edit-course/${course.id}`}
                  className="btn btn-warning me-3"
                >
                  <i className="bi-pencil-square me-2"></i>Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCourse(course)}
                >
                  <i className="bi-trash me-2"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showConfirm && (
        <>
          <div
            className="modal show"
            tabIndex={-1}
            role="dialog"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Confirm Delete</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={closeConfirm}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    Are you sure you want to delete "{courseToDelete?.title}"?
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeConfirm}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={confirmDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CourseList3;
