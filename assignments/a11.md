## 📌 Assignment: Display Recipes with Loading & Error Handling

### 🎯 Goal

Create a **`RecipeList`** component that:

1. Fetches recipe data from an API when the component mounts
2. Displays a **loading message** while data is being fetched
3. Displays an **error message** if the API call fails
4. Renders a **list of recipe cards** when the fetch is successful

---

### 🗂 API to Use

**Endpoint:**

```
https://dummyjson.com/recipes
```

The API returns a JSON object with a `recipes` array.
Each recipe object contains properties like:

```json
{
  "id": 1,
  "name": "Classic Margherita Pizza",
  "image": "https://cdn.dummyjson.com/recipe-images/1.jpg",
  "difficulty": "Medium",
  "cuisine": "Italian"
}
```

---

### 💡 Instructions

1. **Create the `RecipeList` component**

   * Use `useState` to store:

     * `recipes` (array)
     * `loading` (boolean)
     * `error` (string or null)
   * Use `useEffect` to fetch recipes when the component first mounts.

2. **Fetch Data**

   * API URL: `https://dummyjson.com/recipes`
   * If the response is not OK, throw an error:

     ```ts
     throw new Error("Failed to fetch recipes");
     ```
   * Extract `data.recipes` from the JSON and store in state.

3. **Handle Loading & Errors**

   * Show `"Loading recipes..."` while fetching
   * Show the error message if the fetch fails

4. **Render Recipes**

   * Display each recipe inside a Bootstrap card:

     * Recipe name as title
     * Recipe image (`image`)
     * Cuisine & difficulty in card footer

---

### 📄 Starter Template

```tsx
import { useEffect, useState } from "react";

interface Recipe {
  id: number;
  name: string;
  image: string;
  difficulty: string;
  cuisine: string;
}

const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipes = async () => {
    try {
      // TODO: Fetch from API and update state
    } catch (err: any) {
      // TODO: Handle error
    } finally {
      // TODO: Stop loading
    }
  };

  useEffect(() => {
    // TODO: Call fetchRecipes
  }, []);

  if (loading) {
    return <h2>Loading recipes...</h2>;
  }

  if (error) {
    return <h2 className="text-danger">{error}</h2>;
  }

  return (
    <div className="container">
      <h1>Recipe List</h1>
      <div className="row">
        {/* TODO: Map through recipes and render cards */}
      </div>
    </div>
  );
};

export default RecipeList;
```

---

### 📝 Tasks to Submit

* Complete the `fetchRecipes` function with **loading** & **error handling**
* Render the recipe cards with **Bootstrap**
* Test by using:

  * Correct API URL → recipes should load
  * Incorrect API URL → error message should appear