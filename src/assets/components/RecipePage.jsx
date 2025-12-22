import React, { useState, useEffect, useMemo } from "react";
import RecipeCategories from "../components/RecipeCategories.jsx";
import RecipeList from "../components/RecipeList.jsx";
import Header from "../components/Header.jsx";
import SearchBar from "./SearchBar.jsx";
import Filter from "./Filter.jsx";
import styles from "../components/RecipePage.module.css";
const BASE = "https://www.themealdb.com/api/json/v1/1";
function RecipePage() {
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Dessert");
  const [sortKey, setSortKey] = useState("name_asc");
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    async function loadCategories() {
      const res = await fetch(`${BASE}/categories.php`);
      const data = await res.json();
      setCategories(data.categories || []);
    }
    loadCategories();
  }, []);
  useEffect(() => {
    async function loadRecipes() {
      const res = await fetch(
        `${BASE}/filter.php?c=${encodeURIComponent(selectedCategory)}`
      );
      const data = await res.json();
      setRecipes(data.meals || []);
    }
    loadRecipes();
  }, [selectedCategory]);
  const visibleRecipes = useMemo(() => {
    const list = Array.isArray(recipes) ? [...recipes] : [];
    const q = query.trim().toLowerCase();
    const search = q
      ? list.filter((r) => (r.strMeal ?? "").toLowerCase().includes(q))
      : list;
    switch (sortKey) {
      case "name_asc":
        return search.sort((a, b) =>
          (a.strMeal ?? "").localeCompare(b.strMeal ?? "", undefined, {
            sensitivity: "base",
          })
        );
      case "id_asc":
        return search.sort((a, b) => Number(a.idMeal) - Number(b.idMeal));
      case "id_desc":
        return search.sort((a, b) => Number(b.idMeal) - Number(a.idMeal));
      default:
        return search;
    }
  }, [recipes, sortKey, query]);
  return (
    <>
      <div className={styles.recipePage}>
        <Header />
        <div className={styles.wrapper}>
          <RecipeCategories
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <div className={styles.rightPart}>
            <div className={styles.navigation}>
              <SearchBar value={query} onChangeValue={setQuery} />
              <Filter sortKey={sortKey} onChangeSort={setSortKey} />
            </div>
            <RecipeList recipes={visibleRecipes} />
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipePage;
