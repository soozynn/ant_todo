import { FaSpinner, FaTrash } from "react-icons/fa";
import { useCallback, useState } from "react";
import PropTypes from "prop-types";

import { deleteTodo } from "../../api/todo";

const TodoItem = ({ id, title, setTodos, isShowsError, setErrorMessage }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveTodo = useCallback(async () => {
    try {
      setIsLoading(true);
      await deleteTodo(id);

      setTodos((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
      setErrorMessage("Error: Todo Deletion failed :(");
      isShowsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [id, setTodos, isShowsError, setErrorMessage]);

  return (
    <li className="item">
      <span>{title}</span>
      <div className="item-option">
        {!isLoading ? (
          <button onClick={() => handleRemoveTodo()}>
            <FaTrash className="btn-trash" />
          </button>
        ) : (
          <FaSpinner className="spinner" />
        )}
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setTodos: PropTypes.func.isRequired,
  isShowsError: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
};

export default TodoItem;
