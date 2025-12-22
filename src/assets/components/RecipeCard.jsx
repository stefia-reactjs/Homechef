import styles from "../components/RecipeCard.module.css";
import { Link } from "react-router-dom";
function RecipeCard({ id, name, icon }) {
  return (
    <Link to={`/recipes/${id}`} className={styles.link}>
      <div className={styles.card}>
        <img src={icon} className={styles.icon}></img>
        <div className={styles.name}>{name}</div>
      </div>
    </Link>
  );
}
export default RecipeCard;
