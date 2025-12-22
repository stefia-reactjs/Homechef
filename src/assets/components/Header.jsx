import styles from "../components/Header.module.css";
import bgImg from "../hero-image.jpg";
import textImg from "../hero-text.png";
function Header() {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={bgImg} className={styles.bgImg}></img>
        <img src={textImg} className={styles.textImg}></img>
      </div>
    </>
  );
}
export default Header;
