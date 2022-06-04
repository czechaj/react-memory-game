import React, { useState } from "react";
import styles from "./styles.module.css";
function Characters({ char }) {
  //todo: implement below  with contextapi/redux
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div key={char} className={styles.card}>
        <img src={visible ? require(`../../img/${char}.png`) : ""} alt="w" />
      </div>
    </div>
  );
}

export default Characters;
