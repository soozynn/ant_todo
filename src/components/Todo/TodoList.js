import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);

  return todos.length ? (
    <ul>
      {todos.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">...</div>
  );
};

export default TodoList;
