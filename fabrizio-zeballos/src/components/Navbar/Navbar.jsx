import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles["navbar-links"]}>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <Link to={"/about"} className={styles.about}>
            About
          </Link>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};
