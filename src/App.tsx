import styles from './App.module.scss';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';


const TodoApp = () => {
  return <div className={styles.App}>
    <div className={styles.container}>
      <Header />
      <div>
        <TodoList />
      </div>
    </div>
  </div>
}

export default TodoApp;
