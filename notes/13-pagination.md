## 📘 Tutorial: Displaying Recipe List with Client-Side Pagination

### 1️⃣ What You’ll Learn

* Fetch all recipe data from an API in one go
* Store the data in state
* Display recipes **page by page** without calling the API again
* Implement pagination controls using only `useState`

---

### 2️⃣ API to Use

We’ll use DummyJSON again because it returns sample recipe data:

```bash
https://dummyjson.com/recipes
```

This will return all recipes in one request.

---

### 3️⃣ Steps to Implement

#### **Step 1: Define the Recipe Interface**

```tsx
interface Recipe {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  difficulty: string;
}
```

---

#### **Step 2: Create State Variables**

We need:

* `recipes` → all fetched recipes
* `currentPage` → active page
* `recipesPerPage` → how many recipes to display per page
* `loading` & `error` → for feedback

```tsx
const [recipes, setRecipes] = useState<Recipe[]>([]);
const [currentPage, setCurrentPage] = useState<number>(1);
const recipesPerPage = 8;

const [loading, setLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);
```

---

#### **Step 3: Fetch All Recipes Once**

```tsx
const fetchRecipes = async () => {
  try {
    setLoading(true);
    const res = await fetch("https://dummyjson.com/recipes");
    if (!res.ok) {
      throw new Error("Failed to fetch recipes");
    }
    const data = await res.json();
    setRecipes(data.recipes);
  } catch (err: any) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  fetchRecipes();
}, []);
```

---

#### **Step 4: Slice Recipes for the Current Page**

We calculate which recipes to show using array slicing:

```tsx
const indexOfLastRecipe = currentPage * recipesPerPage;
const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
```

---

#### **Step 5: Render Recipe Cards**

```tsx
<div className="row">
  {currentRecipes.map((recipe) => (
    <div className="col-md-3 mb-4" key={recipe.id}>
      <div className="card h-100">
        <img src={recipe.image} alt={recipe.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title text-danger">{recipe.name}</h5>
          <p className="card-text">Cuisine: {recipe.cuisine}</p>
          <p className="card-text">Difficulty: {recipe.difficulty}</p>
        </div>
      </div>
    </div>
  ))}
</div>
```

---

#### **Step 6: Build Pagination Controls**

We’ll generate page numbers dynamically and allow navigation.

```tsx
const totalPages = Math.ceil(recipes.length / recipesPerPage);

<div className="d-flex justify-content-center gap-2 mt-4">
  <button
    className="btn btn-outline-primary"
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(currentPage - 1)}
  >
    Prev
  </button>

  {Array.from({ length: totalPages }, (_, i) => (
    <button
      key={i + 1}
      className={`btn ${currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"}`}
      onClick={() => setCurrentPage(i + 1)}
    >
      {i + 1}
    </button>
  ))}

  <button
    className="btn btn-outline-primary"
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(currentPage + 1)}
  >
    Next
  </button>
</div>
```

---

### 7️⃣ Full Component Code

```tsx
import { useEffect, useState } from "react";

interface Recipe {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  difficulty: string;
}

const RecipeListClientPagination = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const recipesPerPage = 8;

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/recipes");
      if (!res.ok) {
        throw new Error("Failed to fetch recipes");
      }
      const data = await res.json();
      setRecipes(data.recipes);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (loading) return <h2 className="text-center text-primary">Loading recipes...</h2>;
  if (error) return <h2 className="text-center text-danger">{error}</h2>;

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  return (
    <div className="container">
      <h1 className="text-danger text-center my-4">Recipe List</h1>

      <div className="row">
        {currentRecipes.map((recipe) => (
          <div className="col-md-3 mb-4" key={recipe.id}>
            <div className="card h-100">
              <img src={recipe.image} alt={recipe.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title text-danger">{recipe.name}</h5>
                <p className="card-text">Cuisine: {recipe.cuisine}</p>
                <p className="card-text">Difficulty: {recipe.difficulty}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center gap-2 mt-4">
        <button
          className="btn btn-outline-primary"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`btn ${currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="btn btn-outline-primary"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RecipeListClientPagination;
```

---

✅ **Key Learnings:**

* Fetching all data once avoids multiple API calls
* Slicing arrays based on page number for pagination
* Dynamic page button generation
