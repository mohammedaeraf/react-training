## 🧑‍💻 Assignment 06 – Routing Basics 

### 🎯 **Objective**

Build a multi-page React app using **`react-router-dom`** with multiple routes and a navigation bar.
---

### 📌 **Requirements**

1. (Optional) Create a new React app using Vite, CRA, or any setup of your choice.

2. Install and configure `react-router-dom`.

   ```bash
   npm install react-router-dom
   ```

3. Create the following components inside a `src/pages/` folder:

   * `Home.tsx` – Display a welcome message or course overview.
   * `Courses.tsx` – Display a list of static course names.
   * `Instructors.tsx` – Show a few static instructor profiles or names.
   * `Feedback.tsx` – Display static testimonials or feedback messages.

4. Set up routing in `App.tsx` using:

   * `BrowserRouter`
   * `Routes` and `Route`
   * `Link` or `NavLink` for navigation

5. Add a **Navbar** with links to:

   * Home (`/`)
   * Courses (`/courses`)
   * Instructors (`/instructors`)
   * Feedback (`/feedback`)

6. Style the app using Bootstrap or any other CSS framework.