import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import RecipeCard from "./RecipeCard";



const Recipes = () => {

  const navigate = useNavigate();
  const [ recipes, setRecipes ] = useState([]);

  useEffect(() => {
    const url = "/api/v1/recipes/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setRecipes(res))
      .catch(() => navigate("/"));
  })
  return (
    <>
    <div>RECIPES TEST</div>
      {/* <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Recipes for every occasion</h1>
          <p className="lead text-muted">
            We've pulled together our most popular recipes, our latest additions,
            and our editor's picks, so there's sure to be something tempting for you to try.
          </p>
        </div>
      </section> */}
    </>
  )

};

export default Recipes; 