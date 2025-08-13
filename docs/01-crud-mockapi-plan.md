# Plan to Implement CRUD Operations for Courses API

This plan outlines the steps to implement basic **Create, Read, Update, and Delete (CRUD)** operations for a Courses API in a React + TypeScript application.

---

## 1. Display Courses in a Table
- Fetch course data from the API.
- Display each course as a row in the table.

## 2. Add Action Column
- Include **Edit** and **Delete** buttons in the last column of each row.

## 3. Add "Add Course" Button
- Place the button above the table.
- Clicking the button should navigate to the **Add Course** page.

## 4. Create Component Files
- `CourseAdd.tsx` → For adding new courses.
- `CourseEdit.tsx` → For editing existing courses.

## 5. Update App Routing
- In `App.tsx`, add routes for:
  - `/course/add` → `CourseAdd.tsx`
  - `/course/edit/:id` → `CourseEdit.tsx`

## 6. Update Button Links
- Link the **Add Course** button to `/course/add`.
- Link each row's **Edit** button to `/course/edit/:id` with the course ID.

## 7. Implement Delete Functionality
- Add an API call to delete the course by its ID.
- Refresh the course list after deletion.

---

✅ **Outcome:** You will have a working interface to **view, add, edit, and delete** courses from the API.
