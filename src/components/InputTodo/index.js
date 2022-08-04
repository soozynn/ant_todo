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
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const { ref, setFocus } = useFocus();

  useEffect(() => {
    if (todos.isError) return;
    setFocus();
  }, [setFocus, todos.isError]);

  const handleSubmit = useCallback(
    async (e) => {
      try {
        // const key = e.charCode || e.keyCode || 0;

        // if (key === 13 || !key) {
        //   e.preventDefault();
        //   엔터 키 입력 시 useEffect 미동작, focus 먹힘
        //   return;
        // }

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
        setInputText("");
        setIsLoading(false);
      }
    },
    [inputText, dispatch]
  );

  const debouncedOnChange = (text) => {
    debounce(() => setInputText(text), 500)();
  };

  const findMatchingInputValue = () => {
    const removedSpaceArr = inputText
      .replaceAll(" ", "")
      .toLowerCase()
      .split("");

    return todos.todos.filter((todo) =>
      todo.title
        .replaceAll(" ", "")
        .toLowerCase()
        .split("")
        .some((char) => removedSpaceArr.includes(char))
    );
  };

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
      {inputText && findMatchingInputValue().length > 0 && (
        <DropdownList
          list={findMatchingInputValue()}
          inputText={inputText}
          setInputText={setInputText}
        />
      )}
    </>
  );
};

export default InputTodo;
