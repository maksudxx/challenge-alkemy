import styles from "./TableEntry.module.css"
export default function TableEntry(props){

    return(
        <table>
        <thead>
          <tr>
            <th>Concept</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { 
            
            props.entry.map(e =>(
              <tr key={e.id}>
              <td>{e.concept}</td>
              <td>{e.amount}</td>
              <td>
                 {e.type == 1? "Entry": "Expenses"}
              </td>
              <td>
                <button onClick={()=>{props.editRow(e)}}>Edit</button>
                <button onClick={()=>{props.deleteEntry(e.id)}}>Delete</button>
              </td>
            </tr>
            ))
          }
         
        </tbody>
      </table>
    )
}