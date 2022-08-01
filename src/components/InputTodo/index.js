import { FaPlusCircle, FaSpinner } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { createTodo } from "../../api/todo";
import useFocus from "../../hooks/useFocus";

const InputTodo = ({ setTodos, isShowsNotification }) => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { ref, setFocus } = useFocus();

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  const handleSubmit = useCallback(
    async (e) => {
      try {
        e.preventDefault();
        setIsLoading(true);

        const trimmed = inputText.trim();
        if (!trimmed) {
          isShowsNotification(true);
          return;
        }

        const newItem = { title: trimmed };
        const { data } = await createTodo(newItem);

        if (data) {
          return setTodos((prev) => [...prev, data]);
        }
      } catch (error) {
        console.error(error);
        isShowsNotification(true);
      } finally {
        setInputText("");
        setIsLoading(false);
      }
    },
    [inputText, setTodos, isShowsNotification]
  );

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-text"
        placeholder="Add new todo..."
        ref={ref}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        disabled={isLoading}
      />
      {!isLoading ? (
        <button className="input-submit" type="submit">
          <FaPlusCircle className="btn-plus" />
        </button>
      ) : (
        <FaSpinner className="spinner" />
      )}
    </form>
  );
};

InputTodo.propTypes = {
  setTodos: PropTypes.func.isRequired,
};

export default InputTodo;
