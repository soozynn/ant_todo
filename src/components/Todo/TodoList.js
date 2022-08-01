import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);

  return todos.length ? (
    <ul>
      {todos.map(({ id, title }) => (
        <TodoItem key={uuidv4()} id={id} title={title} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">...</div>
  );
};

export default TodoList;
