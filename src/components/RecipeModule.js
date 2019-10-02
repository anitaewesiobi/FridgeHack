import React, {useState, useEffect} from 'react'
import Recipe from "./Recipe"
import { Row, Container } from "react-bootstrap";
import loadingimg from "../imgs/loading.png"


const RecipeModule = () => {
    const APP_KEY = process.env.REACT_APP_KEY;
    const APP_ID = process.env.REACT_APP_ID;
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("cookies")
    const [recipeData, setRecipeData] = useState([])
    const [loading, setLoading] = useState(true)
    const [tempData, setTempData] = useState(recipeData)
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipeData(data.hits);
        setTempData(data.hits);
        setLoading(false);
    }
    
    useEffect(() => {
        getRecipes()
  }, [query])

    const updateSearch = (event) => {
        setSearch(event.target.value)
    }

    const updateQuery = (event) => {
        event.preventDefault()
        setQuery(search)
        setSearch("")
    }
    const loadingScreen = <div className="loader text-center my-2" style={{ backgroundColor: "#fecac2", fontFamily: "'PT Serif', serif", fontWeight: "700", fontSize:"80px" }}> 
        <img syle={{ width: 50, height: "auto", }} src={loadingimg} alt="loading"/>
                                 <p>...Retrieving your recipes!</p>
                         </div>;
    const noResults = <div className="loader text-center" style={{ backgroundColor: "#fecac2", fontFamily: "'PT Serif', serif", fontWeight: "700", fontSize: "80px" }}>
        <img syle={{ width: 50, height: "auto", }} src={loadingimg} alt="loading"/>
        <p>...Recipes Not Found, Try A New Search!</p>
    </div>;

    

    return ( 
        <div className= "RecipeModule">
            <form className="search-form text-center" onSubmit={updateQuery}>
            <p className="form-text pb-2">Over 15,000 recipes are waiting to be discovered </p>
            <input
                className="search-bar"
                type="text"
                value={search}
                onChange={updateSearch}
                placeholder="kale,onion,chicken"
            />
            <button className="search-button"> Explore Recipes </button>
            </form>
            {loading ? loadingScreen: 
                loading === false && recipeData.length === 0 ? noResults:
                <Container className="text-center" fluid={true}>
                    <Row className="recipe-row mx-auto mt-4">
                        {recipeData.map((recipe, index) => (
                            <Recipe
                                key={index}
                                title={recipe.recipe.label}
                                image={recipe.recipe.image}
                                time={recipe.recipe.totalTime}
                                difficulty={recipe.recipe.ingredients.length}
                                calories={recipe.recipe.calories}
                                fullRecipe={recipe.recipe.url}
                            />
                        ))}
                    </Row>
                 </Container>
            }
        </div>
    )
}
export default RecipeModule;
