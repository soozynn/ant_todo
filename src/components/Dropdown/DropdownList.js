import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { createTodo } from "../../api/todo";
import { addTodo, openError } from "../../features/todos/todosSlice";
import DropdownItem from "./DropdownItem";

const DropdownList = ({ list, setInputText }) => {
  const dispatch = useDispatch();

  const handleClickItem = async (e) => {
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
    }
  };

  return list.length ? (
    <ul className="dropdown-list">
      {list.map(({ id, title }) => (
        <DropdownItem key={id} title={title} onClick={handleClickItem} />
      ))}
    </ul>
  ) : null;
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
