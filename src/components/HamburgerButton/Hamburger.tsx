import { useLocation } from "react-router-dom";
import styles from "./Hamburger.module.css";
import { useTheme } from "../ThemeContext";

const Hamburger = ({ showBackdrop, setShowBackdrop }: any) => {
  const { theme, toggleTheme } = useTheme();
  const toggleHandler = () => {
    setShowBackdrop(!showBackdrop);
  };
  return (
    <div className={styles.hamburger}>
      <button onClick={toggleHandler} className={styles.toggleButton}>
        <span
          className={`${styles.toggleButtonBar} ${
            showBackdrop ? styles.leftCrossBar : ""
          } ${theme != "dark" ? styles.toggleButtonBarDark : ""}`}
        ></span>
        <span
          className={`${styles.toggleButtonBar} ${
            showBackdrop ? styles.hide : ""
          } ${theme != "dark" ? styles.toggleButtonBarDark : ""}`}
        ></span>
        <span
          className={`${styles.toggleButtonBar} ${
            showBackdrop ? styles.rightCrossBar : ""
          } ${theme != "dark" ? styles.toggleButtonBarDark : ""}`}
        ></span>
      </button>
    </div>
  );
};

export default Hamburger;
