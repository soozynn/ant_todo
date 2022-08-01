import { FaSpinner, FaTrash } from "react-icons/fa";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { removeTodo, openError } from "../../features/todos/todosSlice";
import { deleteTodo } from "../../api/todo";

const TodoItem = ({ id, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveTodo = useCallback(async () => {
    try {
      setIsLoading(true);
      await deleteTodo(id);
      dispatch(removeTodo(id));
    } catch (error) {
      console.error(error);
      dispatch(openError("Error: Todo Deletion failed :("));
    } finally {
      setIsLoading(false);
    }
  }, [id, dispatch]);

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
  id: PropTypes.string,
  title: PropTypes.string,
};

export default TodoItem;
