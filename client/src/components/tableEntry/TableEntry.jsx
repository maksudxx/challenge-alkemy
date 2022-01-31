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
            
            props.entry.map(entry =>(
              <tr key={entry.id}>
              <td>{entry.concept}</td>
              <td>{entry.amount}</td>
              <td>
                 {entry.type}
              </td>
              <td>
                <button onClick={()=>{props.editRow(entry)}}>Edit</button>
                <button onClick={()=>{props.deleteEntry(entry.id)}}>Delete</button>
              </td>
            </tr>
            ))
          }
         
        </tbody>
      </table>
    )
}