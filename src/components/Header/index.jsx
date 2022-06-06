import React from "react";
import styles from "./styles.module.css";
function Header() {
  return (
    <header>
      <div className={styles.left}>
        <div className={styles.brand}>The Office</div>
        <div>Memory Game</div>
      </div>
    </header>
  );
}

export default Header;
