import styles from './Header.module.scss';

const Header = () => {
  return <div className={styles.header}>
      <h1>Todo List</h1>
      <h3>Get things done, one item at a time</h3>
  </div>
}

export default Header;