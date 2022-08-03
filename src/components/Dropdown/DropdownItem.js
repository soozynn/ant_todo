import React from "react";
import PropTypes from "prop-types";

const DropdownItem = ({ title, onClick }) => {
  return (
    <div className="dropdown-item" onClick={onClick}>
      {title}
    </div>
  );
};

DropdownItem.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DropdownItem;
