import { useState } from "react";
import AddEntry from "../../components/addEntry/AddEntry";
import TableEntry from "../../components/tableEntry/TableEntry";
import EditEntry from "../../components/editEntry/EditEntry";
import styles from "./NewEntry.module.css";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Buttons from "../../components/buttons/Buttons";
const operations = require("../../utils/operations")

export default function NewEntry() {
  const navigate = useNavigate()
  //state that saves income
  const [entry, setEntry] = useState([]);
  
  //add new income
  const addEntry = (entry) => {
    entry.id = uuidv4();
    setEntry((oldEntries) => [...oldEntries, entry]);
  };

  //remove an element from the table with the parameter id
  const deleteEntry = (id) => {
    setEntry(entry.filter((e) => e.id !== id));
  };
  //clicking on the edit button changes state to render the edit component
  const [editing, setEditing] = useState(false);

  const [currentEntry, setCurrentEntry] = useState({
    id: null,
    concept: "",
    amount: "",
    type: "",
  });

  //console.log(entry)

  const editRow = (entry) => {
    setEditing(true);
    setCurrentEntry({
      id: entry.id,
      concept: entry.concept,
      amount: entry.amount,
      type: entry.type,
    });
  };

  const save = (entry) => {
    operations.createEntry({entry})
    setTimeout(() => {
      navigate('/home')
    },2000)
  }

  const updateEntry = (id, updateEntry) => {
    setEditing(false);
    setEntry(entry.map((e) => (e.id === id ? updateEntry : e)));
  };

  return (
    <div className={styles.container}>
      {editing ? (
         <div className={styles.form}>
            <h2>Edit entry</h2>
            <EditEntry currentEntry={currentEntry} updateEntry={updateEntry} />
         </div>
       
      ) : (
        <div className={styles.form}>
           <h2>New Entry</h2>
          <AddEntry addEntry={addEntry} />
        </div>
      )}

      <div className={styles.containerTable}>
      {entry.length > 0 ? (
        <TableEntry entry={entry} deleteEntry={deleteEntry} editRow={editRow} />
      ) : (
        <div>
          <p className={styles.message}>Table empty</p>
        </div>
      )}
      {editing ? null : <Buttons save={save} entry={entry}/>}
      </div>
    </div>
  );
}
