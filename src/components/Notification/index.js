import React from "react";
import { FaExclamationTriangle, FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

const Notification = ({ message, onClick, isClosed }) => {
  return (
    <div className={`alert-container ${isClosed ? "show" : "hide"}`}>
      <FaExclamationTriangle className="alert-icon" />
      <h1 className="alert-message">{message}</h1>
      <div className="alert-close-btn" onClick={onClick}>
        <FaTimes className="alert-btn-icon" />
      </div>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isClosed: PropTypes.func.isRequired,
};

export default Notification;
