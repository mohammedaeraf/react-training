## 🍳 Tutorial: Building a Recipe Search Feature in React

### 🎯 Goal

Learn how to search and display recipes from an API based on a user’s input.

---

## 1️⃣ Overview

In this tutorial, we will:

* Create a **search input** where users can type a recipe name.
* Fetch recipes from the **DummyJSON API** based on the search query.
* Display search results as recipe cards.
* Use **React state** to manage both the search term and the fetched recipes.

---

## 2️⃣ API We’re Using

We’ll use DummyJSON’s search endpoint:

```
https://dummyjson.com/recipes/search?q={searchTerm}
```

Example:
If the user searches for `"Pizza"`:

```
https://dummyjson.com/recipes/search?q=Pizza
```

---

## 3️⃣ Step-by-Step Implementation

### Step 1: Setting up the Component

We start by importing `useState` from React and `Link` from `react-router-dom`.

```tsx
import { useState } from "react";
import { Link } from "react-router-dom";
```

---

### Step 2: Defining the Recipe Type

For **type safety** (using TypeScript), define a `Recipe` type.

```tsx
type Recipe = {
  id: number;
  name: string;
  servings: number;
  cuisine: string;
  difficulty: string;
  image: string;
};
```

---

### Step 3: Creating State Variables

We need:

* `recipes` → an array of recipes from the API
* `searchTerm` → the current search query entered by the user

```tsx
const [recipes, setRecipes] = useState<Recipe[]>([]);
const [searchTerm, setSearchTerm] = useState<string>("");
```

---

### Step 4: Fetching Recipes Based on Search Term

When the user clicks **Search**, we call the API with their input.

```tsx
const fetchRecipes = async (searchTerm: string) => {
  const response = await fetch(`https://dummyjson.com/recipes/search?q=${searchTerm}`);
  const data = await response.json();
  setRecipes(data.recipes);
};
```

---

### Step 5: Creating the Search Box

We use:

* An `<input>` for typing the search term.
* A `<button>` to trigger the API request.

```tsx
<div className="mb-4 d-flex">
  <input
    type="text"
    className="form-control"
    placeholder="Search recipes (e.g. Pizza, Soup, Cake)..."
    value={searchTerm}
    onChange={(event) => setSearchTerm(event.target.value)}
  />
  <button
    className="btn btn-primary"
    onClick={() => fetchRecipes(searchTerm)}
  >
    Search
  </button>
</div>
```

---

### Step 6: Displaying the Recipes

We map through the `recipes` array and create **Bootstrap cards**.

```tsx
<div className="row">
  {recipes.map((recipe) => (
    <div className="col-md-4 mb-3" key={recipe.id}>
      <div className="card h-100">
        <Link to={`/recipes/${recipe.id}`}>
          <img alt="" src={recipe.image} className="card-img-top" />
        </Link>
        <div className="card-body">
          <h4 className="card-title">{recipe.name}</h4>
          <p className="card-text mb-1">
            <span className="fw-bold">Cuisine:</span> {recipe.cuisine}
          </p>
          <p className="card-text">
            <span className="fw-bold">Difficulty:</span> {recipe.difficulty}
          </p>
        </div>
        <div className="card-footer">
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
        </div>
      </div>
    </div>
  ))}
</div>
```

---

### Step 7: Final Component

```tsx
const RecipeSearch = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchRecipes = async (searchTerm: string) => {
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${searchTerm}`);
    const data = await response.json();
    setRecipes(data.recipes);
  };

  return (
    <div>
      <h1 className="text-danger fw-bold mb-4">Recipe Search</h1>
      
      <div className="mb-4 d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Search recipes (e.g. Pizza, Soup, Cake)..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={() => fetchRecipes(searchTerm)}
        >
          Search
        </button>
      </div>

      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 mb-3" key={recipe.id}>
            <div className="card h-100">
              <Link to={`/recipes/${recipe.id}`}>
                <img alt="" src={recipe.image} className="card-img-top" />
              </Link>
              <div className="card-body">
                <h4 className="card-title">{recipe.name}</h4>
                <p className="card-text mb-1">
                  <span className="fw-bold">Cuisine:</span> {recipe.cuisine}
                </p>
                <p className="card-text">
                  <span className="fw-bold">Difficulty:</span> {recipe.difficulty}
                </p>
              </div>
              <div className="card-footer">
                <Link to={`/recipes/${recipe.id}`}>View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
```

---

## 🔹 Key Takeaways

* **Dynamic API calls**: We pass the `searchTerm` directly into the API URL.
* **State management**: `useState` tracks both the search input and fetched recipes.
* **Reusable UI**: Mapping over an array makes rendering lists simple and clean.