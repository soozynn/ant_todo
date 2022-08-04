import React from "react";
import PropTypes from "prop-types";

import styles from "./DropdownItem.module.css";

const DropdownItem = ({ id, title, onClick, selectedId }) => {
  return (
    <div
      className={`${styles.item} ${selectedId === id ? styles.active : ""}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

DropdownItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selectedId: PropTypes.string.isRequired,
};

export default DropdownItem;
