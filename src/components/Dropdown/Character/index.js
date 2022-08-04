import React from "react";
import PropTypes from "prop-types";

import styles from "./Character.module.css";

const Character = ({ inputText, character }) => {
  return (
    <span className={`${inputText.includes(character) ? styles.color : ""}`}>
      {character}
    </span>
  );
};

Character.propTypes = {
  inputText: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default Character;
