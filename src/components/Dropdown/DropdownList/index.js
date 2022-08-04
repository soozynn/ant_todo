import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { createTodo } from "../../../api/todo";
import { addTodo, openError } from "../../../features/todos/todosSlice";
import DropdownItem from "../DropdownItem/index";
import styles from "./DropdownList.module.css";

const DropdownList = ({ list, setInputText }) => {
  const [selectedId, setIsSelectedId] = useState("");
  const dispatch = useDispatch();

  const handleClickItem = async (e, id) => {
    setIsSelectedId(id);

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
      setInputText("");
      setIsSelectedId("");
    }
  };

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    if (!bottom) return;

    // 10개씩 더 불러오기
  };

  return list.length < 11 ? (
    <ul className={styles.container}>
      {list.map(({ id, title }) => (
        <DropdownItem
          key={id}
          id={id}
          title={title}
          onClick={(e) => handleClickItem(e, id)}
          selectedId={selectedId}
        />
      ))}
    </ul>
  ) : (
    <ul className={styles.container} onScroll={handleScroll}>
      {list.map(({ id, title }) => (
        <DropdownItem
          key={id}
          id={id}
          title={title}
          onClick={(e) => handleClickItem(e, id)}
          selectedId={selectedId}
        />
      ))}
      <div className={styles.more}>...</div>
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
  setInputText: PropTypes.func.isRequired,
};

export default DropdownList;
