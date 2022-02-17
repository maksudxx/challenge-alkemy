import { Link } from "react-router-dom";
import styles from "./NavLinks.module.css";
export const NavLinks = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.itemList}>
        <Link to="/newEntry" className={styles.link}>
          <p className={styles.option}>NEW ENTRY</p>
        </Link>
      </li>

      <li className={styles.itemList}>
        <Link to="/about" className={styles.link}>
          {" "}
          <p className={styles.option}>ABOUT</p>
        </Link>
      </li>

      <li className={styles.itemList}>
        <Link to="/" className={styles.link}>
          <p className={styles.option}>EXIT</p>
        </Link>
      </li>
    </ul>
  );
};
