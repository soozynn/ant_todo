import React, { useState, useCallback, forwardRef } from "react";
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

  const handleScroll = async (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    if (!bottom) return;

    try {
      setIsLoading(true);
      // 10개 추가로 보여주기
    } catch (error) {
      console.error(error);
      dispatch(openError("Failed to get more matching todos :("));
    } finally {
      setIsLoading(false);
    }
  };

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
    <ul className={styles.container} onScroll={handleScroll}>
      {list
        .filter((_, index) => index < 10)
        .map(({ id, title }) => (
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
        <div className={styles.moreIcon}>...</div>
      ) : (
        <div className={styles.spinnerWrapper}>
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
