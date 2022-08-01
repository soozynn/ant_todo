import React from "react";
import { FaExclamationTriangle, FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

const Notification = ({ message, onClick, isClosed }) => {
  return (
    <div className={`notification-background ${isClosed ? "blur" : "hide"}`}>
      <div className={`notification-container ${isClosed && "show"}`}>
        <FaExclamationTriangle className="notification-icon" />
        <h1 className="notification-message">{message}</h1>
        <div className="notification-close-btn" onClick={onClick}>
          <FaTimes className="notification-btn-icon" />
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
