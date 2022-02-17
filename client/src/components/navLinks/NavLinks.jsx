import { Link } from "react-router-dom";
import styles from "./NavLinks.module.css";
export const NavLinks = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.itemList}>
        <Link to="/newEntry" className={styles.link}>
          <p className={styles.option}>New entry</p>
        </Link>
      </li>

      <li className={styles.itemList}>
        <p className={styles.option}>About</p>
      </li>

      <li className={styles.itemList}>
        <Link to="/" className={styles.link}>
          <p className={styles.option}>Exit</p>
        </Link>
      </li>
    </ul>
  );
};
