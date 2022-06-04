import React from "react";
import styles from "./styles.module.css";
import box from "../../data/imageMap";
import Characters from "../Characters";
function Canvas() {
  return (
    <main>
      {box.map((char) => {
        return <Characters char={char} />;
      })}
    </main>
  );
}

export default Canvas;
