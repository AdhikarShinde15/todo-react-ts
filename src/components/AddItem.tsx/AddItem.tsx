import { useState } from "react";
import { IAddTodo } from "./AddItem.types";

const AddItem = ({ AddTodo }: IAddTodo) => {
    const [newTodo, setNewTodo] = useState('');
    return <>
    <p>Add to the Todo List</p>
    <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
    <button onClick={() => { AddTodo(newTodo); setNewTodo(''); }}>Add Item</button>
    </>
}

export default AddItem;