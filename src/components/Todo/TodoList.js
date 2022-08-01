import PropTypes from "prop-types";

import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos, isShowsError, setErrorMessage }) => {
  return todos.length ? (
    <ul>
      {todos.map(({ id, title }) => (
        <TodoItem
          key={id}
          id={id}
          title={title}
          setTodos={setTodos}
          isShowsError={isShowsError}
          setErrorMessage={setErrorMessage}
        />
      ))}
    </ul>
  ) : (
    <div className="empty-list">...</div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
    })
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
  isShowsError: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
};

export default TodoList;
