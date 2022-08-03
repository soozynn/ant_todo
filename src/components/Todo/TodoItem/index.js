import { FaSpinner, FaTrash } from "react-icons/fa";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { removeTodo, openError } from "../../../features/todos/todosSlice";
import { deleteTodo } from "../../../api/todo";
import styles from "./TodoItem.module.css";

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
    <li className={styles.item}>
      <span>{title}</span>
      <div className={styles.option}>
        {!isLoading ? (
          <button onClick={() => handleRemoveTodo()}>
            <FaTrash className={styles.btn} />
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
};

export default TodoItem;
