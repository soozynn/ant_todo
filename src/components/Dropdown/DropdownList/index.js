import React, { useState, useCallback, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { FaSpinner } from "react-icons/fa";

import { createTodo } from "../../../api/todo";
import { addTodo, openError } from "../../../features/todos/todosSlice";
import DropdownItem from "../DropdownItem/index";
import styles from "./DropdownList.module.css";

const DropdownList = ({ list, inputText, setInputText, resetFocus }) => {
  const [itemId, setItemId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [count, setCount] = useState(10);
  const [todos, setTodos] = useState([...list.slice(0, 10)]);
  const ref = useRef();
  const dispatch = useDispatch();

  const handleClickItem = useCallback(
    async (e, id) => {
      setItemId(id);

      try {
        const newItem = { title: e.target.textContent };
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
        setItemId("");
      }
    },
    [dispatch, setInputText, resetFocus]
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const firstEntry = entries[0];
      setHasMore(firstEntry.isIntersecting);
      setIsLoading(true);
    });

    if (!ref.current) return;
    observer.observe(ref.current);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (hasMore && list.length > todos.length) {
      setTodos((prev) => [...prev, ...list.slice(count, count + 10)]);
      setCount((prev) => prev + 10);
      setIsLoading(false);
    }
  }, [hasMore, count, list, todos.length]);

  return list.length < 11 ? (
    <ul className={styles.container}>
      {list.map(({ id, title }) => (
        <DropdownItem
          key={id}
          id={id}
          title={title}
          onClick={(e) => handleClickItem(e, id)}
          itemId={itemId}
          inputText={inputText}
        />
      ))}
    </ul>
  ) : (
    <ul className={styles.container}>
      {todos.map(({ id, title }) => (
        <DropdownItem
          key={id}
          id={id}
          title={title}
          onClick={(e) => handleClickItem(e, id)}
          itemId={itemId}
          inputText={inputText}
        />
      ))}
      {!isLoading ? (
        <div
          className={`${
            list.length > todos.length ? styles.moreIcon : styles.hide
          }`}
          ref={ref}
        >
          ...
        </div>
      ) : (
        <div
          className={`${
            list.length > todos.length ? styles.spinnerWrapper : styles.hide
          }`}
        >
          <FaSpinner className={styles.spinner} />
        </div>
      )}
    </ul>
  );
};

DropdownList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
    })
  ).isRequired,
  inputText: PropTypes.string.isRequired,
  setInputText: PropTypes.func.isRequired,
  resetFocus: PropTypes.func.isRequired,
};

export default DropdownList;
