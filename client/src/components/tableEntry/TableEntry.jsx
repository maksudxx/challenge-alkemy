import styles from "./TableEntry.module.css";
import {AiOutlineEdit} from "react-icons/ai"
import {MdDelete} from "react-icons/md" 
export default function TableEntry(props) {
  return (
    <table className={styles.containerTable}>
      <thead className={styles.head}>
        <tr>
          <th>Concept</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className={styles.head}>
        {props.entry.map((e) => (
          <tr key={e.id}>
            <td>{e.concept}</td>
            <td>{e.amount}</td>
            <td>{e.type == 1 ? "Entry" : "Expenses"}</td>
            <td>
              <AiOutlineEdit
                onClick={() => {
                  props.editRow(e);
                }}
                className={styles.button}
              >
                Edit
              </AiOutlineEdit>
              <MdDelete
                onClick={() => {
                  props.deleteEntry(e.id);
                }}
                className={styles.button}
              >
                Delete
              </MdDelete>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
