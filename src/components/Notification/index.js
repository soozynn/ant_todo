import React from "react";
import { FaExclamationTriangle, FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

import styles from "./Notification.module.css";

const Notification = ({ message = "error", onClick, isClosed }) => {
  return (
    <div
      className={`${styles.background} ${isClosed ? styles.blur : styles.hide}`}
    >
      <div className={`${styles.container} ${isClosed && styles.show}`}>
        <FaExclamationTriangle className={styles.warnigIcon} />
        <h1 className={styles.message}>{message}</h1>
        <div className={styles.closeBtn} onClick={onClick}>
          <FaTimes className={styles.closeIcon} />
        </div>
      </div>
    </div>
  );
};
// 제너릭하게
Notification.propTypes = {
  message: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isClosed: PropTypes.bool.isRequired,
};

export default Notification;
