import { useSelector } from "react-redux";

import TodoItem from "../TodoItem/index";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);

  return todos.length ? (
    <ul>
      {todos.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} />
      ))}
    </ul>
  ) : (
    <div className={styles.empty}>...</div>
  );
};

export default TodoList;
