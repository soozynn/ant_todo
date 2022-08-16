import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import Character from "../Character";
import styles from "./DropdownItem.module.css";

const DropdownItem = ({ id, title, onClick, itemId, inputText }) => {
  const titleCharArr = title.split("");
  const isLongCharacter = title.length > 35; // 뒤에 불필요
  // 데이터 타입이 불리언으로 정해져있,
  return (
    <div
      className={`${styles.item} ${itemId === id ? styles.active : ""}`}
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
        : /// 내장으로 넣는게
          titleCharArr.map((char) => (
            <Character key={uuidv4()} character={char} inputText={inputText} />
          ))}
    </div>
  );
};

DropdownItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  itemId: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
};

export default DropdownItem;
