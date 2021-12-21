import {useForm} from "react-hook-form"
import styles from './EditEntry.module.css'
export default function EditEntry(props){

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentEntry
    });

    setValue('concept', props.currentEntry.concept)
    setValue('amount', props.currentEntry.amount)

    const onSubmit = (data, e)=>{
        console.log(data);
        props.updateEntry(props.currentEntry.id, data)
        e.target.reset()
    }
    return (
      <div className={styles.container}>
          <h2>Edit entry</h2>
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
            <option value={"Entry"}>Entry</option>
            <option value={"expenses"}>Expenses</option>
          </select>
          <br />
          <button className={styles.btn}>Edit Entry</button>
        </form>
      </div>
    );
}