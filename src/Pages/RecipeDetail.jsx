import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';

function RecipeDetail() {
  const { id } = useParams();
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
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <div className="loader"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="recipe-detail-container">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <p>{recipe.strInstructions}</p>
        </div>
      )}
    </>
  );
}

export default RecipeDetail;
