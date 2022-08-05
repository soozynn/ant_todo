import { FaPlusCircle, FaSpinner } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { debounce } from "lodash";

import { addTodo, openError } from "../../features/todos/todosSlice";
import { createTodo } from "../../api/todo";
import useFocus from "../../hooks/useFocus";
import DropdownList from "../Dropdown/DropdownList";
import styles from "./InputTodo.module.css";

const InputTodo = () => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const { ref, setFocus, resetFocus } = useFocus();

  const handleSubmit = useCallback(
    async (e) => {
      try {
        e.preventDefault();
        setIsLoading(true);

        const trimmedInputText = inputText.trim();
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        if (specialChars.test(trimmedInputText)) {
          dispatch(openError("Please enter excluding special characters"));
          return;
        }

        if (!trimmedInputText) {
          dispatch(openError("Please write something ✍️"));
          return;
        }

        const newItem = { title: trimmedInputText };
        const { data } = await createTodo(newItem);

        if (data) {
          dispatch(addTodo(data));
        }
      } catch (error) {
        console.error(error);
        dispatch(openError("Failed create Todo :("));
      } finally {
        resetFocus();
        setInputText("");
        setIsLoading(false);
      }
    },
    [inputText, dispatch, resetFocus]
  );

  const debouncedOnChange = (text) => {
    debounce(() => setInputText(text), 500)();
  };

  const findMatchingTitle = () => {
    const removedSpaceArr = inputText.replaceAll(" ", "").toLowerCase();

    return todos.todos.filter((todo) =>
      todo.title
        .replaceAll(" ", "")
        .toLowerCase()
        .split("")
        .some((char) => removedSpaceArr.includes(char))
    );
  };

  useEffect(() => {
    if (todos.isError) return;
    setFocus();
  }, [setFocus, todos.isError]);

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <input
          className={styles.text}
          placeholder="Add new todo..."
          ref={ref}
          onChange={(e) => debouncedOnChange(e.target.value)}
          disabled={isLoading}
        />
        {!isLoading ? (
          <button className={styles.submit} type="submit">
            <FaPlusCircle className={styles.btn} />
          </button>
        ) : (
          <FaSpinner className="spinner" />
        )}
      </form>
      {inputText && findMatchingTitle().length > 0 && (
        <DropdownList
          list={findMatchingTitle()}
          inputText={inputText}
          setInputText={setInputText}
          resetFocus={resetFocus}
        />
      )}
    </>
  );
};

export default InputTodo;
