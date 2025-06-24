import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((response) => {
        setStore(response.data.meals);
      })
      .catch((error) => {
        console.log("Axios error:", error);
      });
  }, []);

  return (
 
    <div className="recipe-container">
<h1 className="text-center text-[#9B177E] mt-16 mb-5 text-3xl
 font-bold capitalize tracking-wide"> Crispy Craze!
</h1>
  <ul className="recipe-list">
    {store?.map((item) => (
      <li key={item.idMeal}>
        <Link to={`/RecipeDetail/${item.idMeal}`}>
          <img src={item.strMealThumb} alt={item.strMeal} />
          <h2>{item.strMeal}</h2>
          <p>{item.strInstructions?.slice(0, 200)}...</p>
        </Link>
      </li>
    ))}
  </ul>
</div>

  );
}

export default Home;