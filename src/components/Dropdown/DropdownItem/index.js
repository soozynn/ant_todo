import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import styles from "./DropdownItem.module.css";
import Character from "../Character";

const DropdownItem = ({ id, title, onClick, selectedId, inputText }) => {
  const titleCharArr = title.split("");
  const isLongCharacter = title.length > 35 ? true : false;

  return (
    <div
      className={`${styles.item} ${selectedId === id ? styles.active : ""}`}
      onClick={onClick}
    >
      {isLongCharacter
        ? titleCharArr
            .filter((_, index) => index < 35)
            .map((char) => (
              <Character
                key={uuidv4()}
                character={char}
                inputText={inputText}
              />
            ))
        : titleCharArr.map((char) => (
            <Character key={uuidv4()} character={char} inputText={inputText} />
          ))}
      {isLongCharacter && <span>...</span>}
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
