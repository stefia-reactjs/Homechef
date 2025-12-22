import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import logo from "../logo-light.svg";
import expandLeft from "../Expand_left.svg";
import styles from "../components/RecipeDetail.module.css";
const BASE = "https://www.themealdb.com/api/json/v1/1";

function getIngredientLines(meals) {
  const lines = [];
  for (let i = 1; i <= 20; i++) {
    const ing = (meals[`strIngredient${i}`] || "").trim();
    if (!ing) continue;
    const meas = (meals[`strMeasure${i}`] || "").trim();
    lines.push(`${meas} ${ing}`.trim());
  }
  return lines;
}

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`${BASE}/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.meals[0]);
      });
  }, [id]);
  if (!recipe) return null;
  const ingredientLines = getIngredientLines(recipe);
  const instructions = recipe.strInstructions
    .replace(/\r\n▢\r\n/g, "\n\n")
    .replace(/\r\n/g, "\n\n")
    .trim();

  return (
    <div className="recipe-detail">
      {
        <section>
          <div className={styles.header}>
            <img src={logo} className={styles.logo} />
            <Link to="/" className={styles.button}>
              <img src={expandLeft}></img>
              <p>Back to categories</p>
            </Link>
          </div>

          {recipe.strMealThumb ? (
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className={styles.img}
            />
          ) : null}
          <h1>{recipe.strMeal}</h1>
          <div className={styles.tags}>
            <p className={styles.tag}>
              <span>category:</span> {recipe.strCategory}
            </p>
            <p className={styles.tag}>
              <span>area:</span> {recipe.strArea}
            </p>
          </div>
          <div className={styles.ingredients}>
            <div className={styles.title}>
              <div className={`${styles.marker} ${styles.yellow}`}></div>
              <h3>Ingredients</h3>
            </div>
            <ul className={styles.ingredientsList}>
              {ingredientLines.map((line, index) => (
                <li key={index} className={styles.ingredientsItem}>
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.instructions}>
            <div className={styles.title}>
              <div className={`${styles.marker} ${styles.blue}`}></div>
              <h3>Instructions</h3>
            </div>
            <div className={styles.instructionsText}>{instructions}</div>
          </div>
        </section>
      }
    </div>
  );
}

export default RecipeDetail;
