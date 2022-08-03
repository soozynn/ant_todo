import React from "react";
import PropTypes from "prop-types";

import DropdownItem from "./DropdownItem";

const DropdownList = ({ todos, setInputText }) => {
  return todos.length ? (
    <ul className="dropdown-list">
      {todos.map(({ id, title }) => (
        <DropdownItem key={id} title={title} setInputText={setInputText} />
      ))}
    </ul>
  ) : (
    <div className="dropdown-result">일치하는 항목이 없습니다.</div>
  );
};

DropdownList.propTypes = {
  title: PropTypes.string.isRequired,
  setInputText: PropTypes.func.isRequired,
};

export default DropdownList;
