import styles from "./Balance.module.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
export const Balance = ({ amount, concept, type }) => {
  return (
    <li className={styles.container}>
      {type == 1 ? (
        <div className={styles.containerIcons}>
          <AiFillCaretUp className={styles.up} />
        </div>
      ) : (
        <div className={styles.containerIcons}>
          <AiFillCaretDown className={styles.down} />
        </div>
      )}
      <p className={styles.details}>{concept}</p>
      {type == 1 ? (
        <p className={styles.amount}>${amount}</p>
      ) : (
        <p className={styles.amount}>-${amount}</p>
      )}
    </li>
  );
};
