import React,{useEffect,useState} from 'react';
import Recipe from "./Recipes";
import './App.css';

const App = () => {
  const APP_ID = 'ca4fc684';
  const APP_KEY = "876145041fd371d9dd6e9873c25d9b30";

  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState('chicken');

  useEffect(()=> {
    getRecipes();
  }, [query]);

  const getRecipes =  async () => {

    const response = await  fetch(

        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch  = e => {
    setSearch(e.target.value);

  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return(
      <div className={"App"}>
        <form onSubmit={getSearch} className="Search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          <button className="search-button" type="submit" >Search</button>
        </form>
        <div className="recipe">
        {recipes.map(recipe => (
            <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                ingredients={recipe.recipe.ingredients}
                image={recipe.recipe.image}
            />
        ))}
        </div>
      </div>
  );
};

export default App;
