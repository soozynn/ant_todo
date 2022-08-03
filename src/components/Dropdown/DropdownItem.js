import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { createTodo } from "../../api/todo";
import { addTodo, openError } from "../../features/todos/todosSlice";

const DropdownItem = ({ title, setInputText }) => {
  const dispatch = useDispatch();

  const handleClickItem = async (e) => {
    try {
      const newItem = { title: e.target.value };
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

  return (
    <div className="dropdown-title" onClick={handleClickItem}>
      {title}
    </div>
  );
};

DropdownItem.propTypes = {
  title: PropTypes.string.isRequired,
  setInputText: PropTypes.func.isRequired,
};

export default DropdownItem;
