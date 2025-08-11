
## 📄 Assignment: Recipe List with Client-Side Pagination

### 🎯 Objective

Build a React application that:

* Fetches all recipes from an API in a single request
* Displays them in a paginated format **on the client side**
* Allows users to navigate between pages without re-fetching data

---

### 📝 Requirements

1. **Fetch Data**

   * Use this API:

     ```
     https://dummyjson.com/recipes
     ```
   * Fetch **all recipes** when the component first renders.
   * Store the fetched recipes in a state variable.

2. **Pagination Logic**

   * Show **8 recipes per page**.
   * Calculate which recipes to display using **array slice** based on the current page.
   * Create "Prev" and "Next" buttons.
   * Create **page number buttons** dynamically.
   * Disable "Prev" when on the first page and "Next" when on the last page.

3. **Recipe Card Layout**

   * Each recipe card must display:

     * **Image**
     * **Name**
     * **Cuisine**
     * **Difficulty**
   * Use Bootstrap (or any CSS framework) for styling.

4. **Error & Loading States**

   * Show a loading message while fetching data.
   * Show an error message if fetching fails.

---

### 💡 Hints

* You can store the current page number in a `useState` variable.
* Use:

  ```ts
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  ```
* To create page numbers dynamically:

  ```ts
  Array.from({ length: totalPages }, (_, i) => i + 1)
  ```

---

### 📌 Expected Output

* When the app loads, 8 recipes are displayed on the first page.
* Users can click **page numbers**, **Prev**, and **Next** to navigate.
* No additional API calls are made when switching pages (pagination happens on the client side).

---

### 🚀 Bonus Task

* Highlight the active page number button.
* Make the pagination responsive for mobile devices.
