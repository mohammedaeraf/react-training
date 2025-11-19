## 📝 Assignment 15: Extend Courses App – Implement Edit Course Functionality

### Objective

Further extend your Courses App to allow users to **edit existing courses**. This action should update both the UI and the MockAPI backend.

---

### Requirements

#### **Edit Course**

- Add an "Edit" button to each row in the courses table.
- Clicking "Edit" should navigate to a form pre-filled with the selected course's data.
- On form submission, send a PUT or PATCH request to your MockAPI endpoint (e.g., `https://<your-project>.mockapi.io/courses/:id`) to update the course.
- After successful update, navigate back to the course list and show the updated table.
