import { Link } from "react-router-dom";
import styles from "./Buttons.module.css";
export default function Buttons() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Save</button>
      <Link to="/home">
        <button className={styles.button}>Back</button>
      </Link>
    </div>
  );
}
