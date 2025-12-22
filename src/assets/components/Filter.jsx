import styles from "../components/Filter.module.css";
import expandDown from "../Expand_down.svg";
function Filter({ sortKey, onChangeSort }) {
  return (
    <div className={styles.wrapper}>
      <span>Sort by: </span>
      <span className={styles.menu}>
        <select value={sortKey} onChange={(e) => onChangeSort(e.target.value)}>
          <option value="name">Name</option>
          <option value="id_desc">Newest</option>
          <option value="id_asc">Oldest</option>
        </select>
        <img src={expandDown} className={styles.icon}></img>
      </span>
    </div>
  );
}
export default Filter;
