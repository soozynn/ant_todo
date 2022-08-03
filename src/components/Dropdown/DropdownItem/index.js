import React from "react";
import PropTypes from "prop-types";

import styles from "./DropdownItem.module.css";

const DropdownItem = ({ title, onClick }) => {
  return (
    <div className={styles.item} onClick={onClick}>
      {title}
    </div>
  );
};

DropdownItem.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DropdownItem;
