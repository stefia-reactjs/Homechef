import styles from "../components/SearchBar.module.css";
import searchIcon from "../Search.svg";
function SearchBar({ value, onChangeValue }) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.searchBtn}>
        <img src={searchIcon} className={styles.search}></img>
      </button>
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        placeholder="Search recipes and more..."
      ></input>
    </div>
  );
}
export default SearchBar;
