# Assignment: Course Management Table with Bootstrap

## Objective
Fetch and display a list of courses from a **mock API** (mockapi.io) and display them in a **Bootstrap-styled table** with options to add, edit, and delete courses.

---

## API Resource
Create a resource named **`courses`** in mockapi.io with the following structure:

```ts
interface Course {
  id: number;
  title: string;
  description: string;
}
```

---

## Requirements

1. **Fetch and Display Courses**

   * Use `fetch` or `axios` to retrieve data from the **`courses`** endpoint.
   * Display the data in a **Bootstrap table** with columns:

     * `#` (serial number)
     * `Title`
     * `Description`
     * `Actions`

2. **Actions Column**

   * Each row must have:

     * **Edit** button — Navigates to the "Edit Course" page for that course.
     * **Delete** button — Deletes the selected course from the mock API and updates the UI.

3. **Add Course Button**

   * Place an **"Add Course"** button **above the table**.
   * Clicking it should navigate to an **"Add Course" form** page.

4. **Routing**

   * Use **React Router** to set up:

     * `/courses` — Displays the course table.
     * `/courses/add` — Displays the Add Course form.
     * `/courses/edit/:id` — Displays the Edit Course form.

---

## Notes

* Use **Bootstrap** classes for styling.
* Keep forms and table in separate components.
* You can use dummy form fields for Add/Edit; actual POST/PUT functionality can be implemented later.

---

## Example Table Layout

| # | Title               | Description         | Actions |        |
| - | ------------------- | ------------------- | ------- | ------ |
| 1 | React Basics        | Intro to React      | Edit    | Delete |
| 2 | TypeScript Advanced | Strong typing in JS | Edit    | Delete |