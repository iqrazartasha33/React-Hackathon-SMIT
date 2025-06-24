import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import { IoArrowBack } from "react-icons/io5";

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        setRecipe(response.data.meals[0]);
      })
      .catch((error) => {
        console.error('Axios error:', error);
      });
  }, [id]);

  return (
    <>
      {!recipe ? (
        <div className="text-center mt-12">
          <div className="loader"></div>
          <p>Loading.....</p>
        </div>
      ) : (
        <div className="recipe-detail-container p-6 text-center">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="mx-auto rounded-lg max-w-full"
          />
          <h1 className="text-2xl font-bold mt-6">
            {recipe.strMeal}</h1>
          <p className="text-left max-w-3xl mx-auto mt-4">
            {recipe.strInstructions}</p>

      <button
      onClick={() => navigate("/")}
      className="mt-8 px-6 py-2 bg-[#9B177E] text-[white]
      rounded-lg hover:bg-[#7d0e62] transition duration-300 
      flex items-center justify-center gap-2 mx-auto"
       >
         <IoArrowBack className="text-xl" />
       Back to Home
     </button>
         
        </div>
      )}
    </>
  );
}

export default RecipeDetail;
