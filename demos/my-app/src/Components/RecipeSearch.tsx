import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Recipe = {
  id: number;
  name: string;
  servings: number;
  cuisine: string;
  difficulty: string;
  image: string;
};

const RecipeSearch = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchRecipes = async (q: string) => {
    // console.log(`You are searching for Recipes with search term ${q}`);
    const apiUrl = `https://dummyjson.com/recipes/search?q=${q}`;
    // console.log(apiUrl);
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }
    const data = await response.json();
    const recipesData: Recipe[] = data.recipes;

    setRecipes(recipesData);
  };

  return (
    <div>
      <h1 className="text-danger fw-bold mb-4">Recipes (Search)</h1>
      <div className="mb-5 d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Search Recipes (e.g. Pizz, Chicken, Soup)..."
          onChange={(event) => setSearchTerm(event.target.value)}
          value={searchTerm}
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
                <p className="card-body">{recipe.difficulty}</p>
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
