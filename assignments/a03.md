## 🧑‍💻 **Assignment 03 – Display Employee Data in a Table**

### 🎯 Objective:

Create a **React component** that displays a list of **employees** using a static array of employee objects. Render this data dynamically into a styled HTML table using JSX.

---

### 📌 Requirements:

1. Create a component named **`EmployeeTable.tsx`** (or `.jsx`).

2. Define a **static array** of employee objects, each containing the following properties:

   * `id` (number)
   * `name` (string)
   * `department` (string)
   * `designation` (string)
   * `salary` (number)

   ```ts
   const employees = [
     { id: 1, name: "Alice", department: "HR", designation: "Manager", salary: 60000 },
     { id: 2, name: "Bob", department: "IT", designation: "Developer", salary: 70000 },
     { id: 3, name: "Charlie", department: "Finance", designation: "Analyst", salary: 65000 },
   ];
   ```

3. Display this data in a **Bootstrap-styled** HTML `<table>` with the following columns:

   * ID
   * Name
   * Department
   * Designation
   * Salary

4. Loop through the array using the `map()` function to generate `<tr>` rows dynamically.

---

### 💡 Example Output:

| ID | Name    | Department | Designation | Salary |
| -- | ------- | ---------- | ----------- | ------ |
| 1  | Alice   | HR         | Manager     | 60000  |
| 2  | Bob     | IT         | Developer   | 70000  |
| 3  | Charlie | Finance    | Analyst     | 65000  |

> ✅ Use Bootstrap classes like `table`, `table-striped`, `table-bordered` for styling.

---

### 🚀 Bonus (Optional):

* Highlight the highest-paid employee row using a different background color.
* Add a heading above the table like “Employee Directory”.

---

### 📁 Submission:

* File: `src/components/EmployeeTable.tsx`
* Import and display this component in `App.tsx`
* Submit your code via GitHub repo link 