import { useState } from "react";
import AddItem from "../AddItem.tsx/AddItem";
import styles from "./TodoList.module.scss";
import  "./TodoList.module.scss";

interface Provider {
    completed: boolean;
    todo: string;
  }

const TodoList = () => {
    const [todos, setTodos] = useState<Provider[]>([]);
    
    const AddTodo = (newTodo: string) => {
        const newObj =[{completed : false, todo : newTodo }]
        const cloneTodos = [...todos, ...newObj];
        setTodos(cloneTodos)
    }
    const DeleteTodo = (delTodo: string) => {
        const FilteredTodos = todos.filter(ele => ele.todo !== delTodo);
        setTodos(FilteredTodos);
    }
    const CompletedTodo = (e: any, completedTodo: string) => {
        if (e.target.checked){
            const FilteredTodos = todos.map(ele => {
                if(ele.todo === completedTodo){
                    ele.completed = true;
                    return ele;
                }
                return ele;
            });
            setTodos(FilteredTodos);
        }  
       
    }
    return <>
        {
            todos.map(ele => <div className={styles.flexListItems} key={Math.random()}>
                {(ele.completed) ? <p><del>{ele.todo}</del></p> : <p>{ele.todo}</p> }
                <div>
                    <input onChange={(e) => CompletedTodo(e,ele.todo)} type="checkbox" />
                    <button onClick={() => DeleteTodo(ele.todo)}><i className="fas fa-trash"></i></button>
                </div>
            </div>)
        }
        <AddItem AddTodo={AddTodo} />
    </>
}

export default TodoList;