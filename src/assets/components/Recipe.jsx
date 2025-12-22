import styles from "../components/Recipe.module.css";
import React, { useState, useEffect } from "react";

function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("dessert");

  useEffect(() => {
    // Fetch recipe data from the API based on selectedCategory
  }, [selectedCategory]);

  return <div className="recipe-page">{}</div>;
}
