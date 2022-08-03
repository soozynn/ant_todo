import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.text}>Toodos</h1>
    </header>
  );
};

export default Header;
