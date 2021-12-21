import {useForm} from "react-hook-form"
export default function AddEntry(props){

    const {register, errors, handleSubmit} = useForm();
    const onSubmit = (data, e)=>{
        console.log(data);
        props.addEntry(data)
        e.target.reset()
    }
    return (
      <div>
          <h2>New Entry</h2>
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
          <button>Add new Entry</button>
        </form>
      </div>
    );
}