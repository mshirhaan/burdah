import { Link } from "react-router-dom";
import styles from "./NavLink.module.css";

function NavLink({ title, link, className, onClick }: any) {
  return (
    <li className={`${styles.navLink} ${className}`} onClick={onClick}>
      <Link to={link}>{title}</Link>
    </li>
  );
}

export default NavLink;
