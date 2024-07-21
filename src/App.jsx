import "./index.css";
import Recipe from "./Recipe";
import { useState, useEffect } from "react";
export default function App() {
  const APP_ID = "7ff18fe8"; //get from https://developer.edamam.com//admin/applications/
  const APP_KEY = "81595d05eea3a414c8ec36de37889ad8";
  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getRecipe();
  }, [query]);
  const getRecipe = async () => {
    const apiFetch = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const response = await fetch(apiFetch);
    const data = await response.json();
    console.log(data.hits);
    setRecipies(data.hits);
  };
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" value={search} onChange={handleInput} />
        <button className="search-button" type="submit">
          Submit
        </button>
      </form>
      <div className="recipies">
        {recipies.map((recipe) => (
          <Recipe
            key={recipe.id}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}
