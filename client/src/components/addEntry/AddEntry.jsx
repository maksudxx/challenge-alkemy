import { useForm } from "react-hook-form";
import styles from "./AddEntry.module.css";
export default function AddEntry(props) {
  const list = [];
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data, e) => {  
    props.addEntry(data);
    list.push(props)
    e.target.reset();
  };
  return (
    <div className={styles.container}>
      <h2>New Entry</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formEntry}>
        <label className={styles.label}>Concept: </label>
        <input
          type="text"
          {...register("concept", {
            required: "Required",
          })}
          className={styles.input}
        />
        <br />
        <br />
        <label className={styles.label}>Amount: </label>
        <input
          type="number"
          {...register("amount", {
            required: "Required",
          })}
          className={styles.input}
        />
        <br />
        <br />
        <label className={styles.label}>type: </label>
        <select {...register("type")} className={styles.input}>
          <option value={"Entry"}>Entry</option>
          <option value={"Expenses"}>Expenses</option>
        </select>
        <br />
        <br />
        <button className={styles.btn}>Add</button>
      </form>
    </div>
  );
}
