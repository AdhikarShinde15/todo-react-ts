import { useState } from "react";
import { IAddTodo } from "./AddItem.types";
import styles from "./AddItem.module.scss";

const AddItem = ({ AddTodo }: IAddTodo) => {
    const [newTodo, setNewTodo] = useState('');
    return <div className={styles.addItem}>
    <p className={styles.inLabel}>Add to the Todo List</p>
    <input className={styles.input} value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
    <button className={styles.addBtn} onClick={() => { AddTodo(newTodo); setNewTodo(''); }}>ADD ITEM</button>
    </div>
}

export default AddItem;