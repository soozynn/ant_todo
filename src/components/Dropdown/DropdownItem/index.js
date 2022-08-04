import React from "react";
import PropTypes from "prop-types";

import styles from "./DropdownItem.module.css";

const DropdownItem = ({ id, title, onClick, selectedId, inputText }) => {
  const characterArr = title.split(/\d+/);
  const coloredTitle = title.match(/\d+/);

  return (
    <div
      className={`${styles.item} ${selectedId === id ? styles.active : ""}`}
      onClick={onClick}
    >
      {title}
      {/* {inputText === ? <span style={styles.active}> {title}</span> : title} */}
    </div>
  );
};

DropdownItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selectedId: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
};

export default DropdownItem;
