import React from "react";
import styles from "./styles.module.css";
function Header() {
  return (
    <header>
      <div className="left">MemoryGame</div>
      <div className={styles.right}>
        {" "}
        <span>Saepe, molestiae?</span>
        <span>Soluta, voluptates!</span>
      </div>
    </header>
  );
}

export default Header;
