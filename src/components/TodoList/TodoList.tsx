import { useEffect, useState } from "react";
import AddItem from "../AddItem.tsx/AddItem";
import styles from "./TodoList.module.scss";
import  "./TodoList.module.scss";
import { Data }from "./Todo.types";

interface Provider {
    completed: boolean;
    todo: string;
  }

const TodoList = () => {
    const [todos, setTodos] = useState<Provider[]>([]);
    useEffect(() => {
       setTodos(Data);
    }, []);
    const AddTodo = (newTodo: string) => {
        const newObj =[{completed : false, todo : newTodo }]
        const cloneTodos = [...todos, ...newObj];
        setTodos(cloneTodos)
    }
    const DeleteTodo = (delTodo: string) => {
        const FilteredTodos = todos.filter(ele => ele.todo !== delTodo);
        setTodos(FilteredTodos);
    }
    const CompletedTodo = (e: any,completedTodo: string) => {
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
    const UndoCompletedTodo = (e: any,completedTodo: string) => {
        
            const FilteredTodos = todos.map(ele => {
                if(ele.todo === completedTodo){
                    ele.completed = false;
                    return ele;
                }
                return ele;
            });
            setTodos(FilteredTodos);
          
       
    }
    return <>
        {
            todos.map(ele => <div className={styles.flexListItems} key={Math.random()}>
                {(ele.completed) ? <p className={styles.todo}><del>{ele.todo}</del></p> : <p className={styles.todo}>{ele.todo}</p> }
                <div className={styles.action}>
                    <input type="checkbox" checked={ele.completed} onChange={(e) => {
                        if(ele.completed){
                            UndoCompletedTodo(e,ele.todo);
                        }else{
                            CompletedTodo(e,ele.todo);
                        }
                        
                    }} />
                    <button className={styles.delBtn} onClick={() => DeleteTodo(ele.todo)}><i className="fas fa-trash"></i></button>
                </div>
            </div>)
        }
        <AddItem AddTodo={AddTodo} />
    </>
}

export default TodoList;