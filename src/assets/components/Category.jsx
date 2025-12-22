import styles from "../components/Category.module.css";

function Category({ name, icon, isActive, onClick }) {
  return (
    <button
      className={isActive ? styles.cardActive : styles.card}
      onClick={() => onClick(name)}
    >
      <img src={icon} className={styles.icon}></img>
      <div className={styles.name}>{name}</div>
    </button>
  );
}
export default Category;
