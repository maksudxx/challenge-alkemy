import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function NavBar() {
  return (
    <div className={styles.container}>
      
    
       
     <ul className={styles.list}>
        <Link to='/newEntry'  className={styles.link}>
          <li className={styles.itemList}>
            <p className={styles.option}>New entry</p>
          </li>
        </Link>

        <li className={styles.itemList}>
          <p className={styles.option}>About</p>
        </li>

        <li className={styles.itemList}>
          <Link to="/" className={styles.link}>
            <p className={styles.option}>Exit</p>
          </Link>
        </li>
      </ul>
     
    </div>
  );
}
