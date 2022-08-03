import React from "react";
import { FaExclamationTriangle, FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

import styles from "./Notification.module.css";

const Notification = ({ message, onClick, isClosed }) => {
  return (
    <div className={`${isClosed ? "blur" : "hide"}`}>
      <div className={`${styles.container} ${isClosed && "show"}`}>
        <FaExclamationTriangle className={styles.warnigIcon} />
        <h1 className={styles.message}>{message}</h1>
        <div className={styles.closeBtn} onClick={onClick}>
          <FaTimes className={styles.closeIcon} />
        </div>
      </div>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isClosed: PropTypes.bool.isRequired,
};

export default Notification;
