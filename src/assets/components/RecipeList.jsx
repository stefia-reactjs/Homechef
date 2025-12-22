import styles from "../components/RecipeList.module.css";
import RecipeCard from "../components/RecipeCard.jsx";
function RecipeList({ recipes }) {
  return (
    <div className={styles.recipes}>
      {recipes.map((c) => (
        <RecipeCard
          id={c.idMeal}
          key={c.idMeal}
          name={c.strMeal}
          icon={c.strMealThumb}
        />
      ))}
    </div>
  );
}
export default RecipeList;
