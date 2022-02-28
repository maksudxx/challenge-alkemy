import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BUDGET MANAGER</h1>
      <Link to="/home" className={styles.link}>
        <div className={styles.buttonStart}>
          <p className={styles.p}>START</p>
        </div>
      </Link>
      <div></div>
      <div></div>
    </div>
  );
}
