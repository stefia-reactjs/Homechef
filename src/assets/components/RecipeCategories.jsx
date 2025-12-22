import Category from "./Category.jsx";
import styles from "./RecipeCategories.module.css";

function RecipeCategories({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className={styles.cards}>
      <h3 className={styles.title}>Categories</h3>
      <div className={styles.list}>
        {categories.map((c) => (
          <Category
            key={c.strCategory}
            name={c.strCategory}
            icon={c.strCategoryThumb}
            onClick={onSelectCategory}
            isActive={c.strCategory === selectedCategory}
          ></Category>
        ))}
      </div>
    </div>
  );
}
export default RecipeCategories;
