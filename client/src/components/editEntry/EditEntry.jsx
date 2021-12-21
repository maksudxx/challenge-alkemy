import {useForm} from "react-hook-form"
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
      <div>
          <h2>Edit entry</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Concept</label>
          <input
            type="text"
            {...register("concept", {
              required: "Required",
            })}
          />
          <label>Amount</label>
          <input
            type="number"
            {...register("amount", {
              required: "Required",
            })}
          />
          <label>type</label>
          <select {...register("type")}>
            <option value={"Entry"}>Entry</option>
            <option value={"expenses"}>Expenses</option>
          </select>
          <button>Edit Entry</button>
        </form>
      </div>
    );
}