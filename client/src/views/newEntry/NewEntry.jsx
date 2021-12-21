import { useState } from "react";
import AddEntry from "../../components/addEntry/AddEntry";
import TableEntry from "../../components/tableEntry/TableEntry";
import EditEntry from "../../components/editEntry/EditEntry";
import styles from './NewEntry.module.css'
import { v4 as uuidv4 } from "uuid";

export default function NewEntry() {
 //state that saves income
  const [entry, setEntry] = useState([]);

  //add new income
  const addEntry = (entry) => {
    entry.id = uuidv4();
    setEntry((oldEntries)=> [...oldEntries, entry]);  
  };

  //remove an element from the table with the parameter id
  const deleteEntry = (id) => {
      console.log(id)
    setEntry(entry.filter(e=> e.id !== id))
  }
//clicking on the edit button changes state to render the edit component
const [editing, setEditing] = useState(false);

const [currentEntry, setCurrentEntry] = useState({
    id:null, concept:"", amount:"", type:""
})

const editRow = (entry) => {
    setEditing(true)
    setCurrentEntry({
        id: entry.id, concept:entry.concept, amount:entry.amount, type:entry.type
    })
}

const updateEntry = (id, updateEntry) =>{
    setEditing(false)
    setEntry(entry.map(e => e.id === id? updateEntry: e))
}

  return (
    <div className={styles.container}>
        {editing?(
            <EditEntry currentEntry={currentEntry} updateEntry={updateEntry}/>
        ): <AddEntry addEntry={addEntry} />}
    
      
      <TableEntry entry={entry} deleteEntry={deleteEntry} editRow={editRow}/>
    </div>
  );
}
