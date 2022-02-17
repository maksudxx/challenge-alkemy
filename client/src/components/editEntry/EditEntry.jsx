import {useForm} from "react-hook-form"
import styles from './EditEntry.module.css'
import { useState, useEffect } from "react";
const operations = require("../../utils/operations");
export default function EditEntry(props){
  const [category, setCategory] = useState([]);
    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentEntry
    });

    useEffect(() => {
      operations.getCategory(setCategory);
    }, []);

    setValue('concept', props.currentEntry.concept)
    setValue('amount', props.currentEntry.amount)

    const onSubmit = (data, e)=>{
        console.log(data);
        props.updateEntry(props.currentEntry.id, data)
        e.target.reset()
    }
    return (
      <div className={styles.container}>
         
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formEntry}>
          <label className={styles.label}>Concept:</label>
          <input
            type="text"
            {...register("concept", {
              required: "Required",
            })}
            className={styles.input}
          />
          <br />
          <label className={styles.label}>Amount:</label>
          <input
            type="number"
            {...register("amount", {
              required: "Required",
            })}
            className={styles.input}
          />
          <br />
          <label className={styles.label}>type:</label>
          <select {...register("type")} className={styles.input}>
          {category.map((c, index) => (
            <option value={c.cat_id} key={index}>
              {c.cat_description}
            </option>
          ))}
        </select>
          <br />
          <button className={styles.btn}>Edit</button>
        </form>
      </div>
    );
}