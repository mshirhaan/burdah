import styles from "./NavLink.module.css";

function NavLink({ title, link, className }: any) {
  return (
    <li className={`${styles.navLink} ${className}`}>
      <a>{title}</a>
    </li>
  );
}

export default NavLink;
