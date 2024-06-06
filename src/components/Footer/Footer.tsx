import HeartAnimation from "../HeartAnimation/HeartAnimation";
import styles from "./Footer.module.css";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <HeartAnimation>
        <div className={styles.footerContent}>
          Made with <FaHeart className={styles.heart} /> for Madinah
        </div>
        <div className={styles.asswuffah}>By Asswuffah Foundation</div>
      </HeartAnimation>
    </div>
  );
};

export default Footer;
