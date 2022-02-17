import { useForm } from "react-hook-form";
import styles from "./AddEntry.module.css";
import { useState, useEffect } from "react";
const operations = require("../../utils/operations");
export default function AddEntry(props) {
  const [category, setCategory] = useState([]);
  const list = [];
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    props.addEntry(data);
    list.push(props);
    e.target.reset();
  };
  useEffect(() => {
    operations.getCategory(setCategory);
  }, []);
  return (
    <div className={styles.container}>
     
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
        <select {...register("type")} className={styles.select}>
          <option>Select a category...</option>
          {category.map((c, index) => (
            <option value={c.cat_id} key={index}>
              {c.cat_description}
            </option>
          ))}
        </select>
        <br />
        <br />
        <button className={styles.btn}>Add</button>
      </form>
    </div>
  );
}
