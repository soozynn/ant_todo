import { FaPlusCircle, FaSpinner } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTodo, openError } from "../../features/todos/todosSlice";
import { createTodo } from "../../api/todo";
import useFocus from "../../hooks/useFocus";
import DropdownList from "../Dropdown/DropdownList";

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
        e.preventDefault();
        setIsLoading(true);

        const trimmedInputText = inputText.trim();
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
        dispatch(openError("Failed submit :("));
      } finally {
        setInputText("");
        setIsLoading(false);
      }
    },
    [inputText, dispatch]
  );

  const findMatchingInputValue = () => {
    const matchedInputValue = todos.todos.filter(
      (todo) => todo.title === inputText
    );
    return matchedInputValue;
  };

  return (
    <>
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
      {inputText && (
        <DropdownList
          todos={findMatchingInputValue()}
          setInputText={setInputText}
        >
          {/* 일치하는 값 색상 변경해주기 일치하는 리스트 보여주기 10개,
          이후 무한 스크롤로 최대 10개씩 받아오기 */}
        </DropdownList>
      )}
    </>
  );
};

export default InputTodo;
