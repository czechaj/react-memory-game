import React from "react";
import { useCards } from "../../contexts/CardsContext";
import styles from "./styles.module.css";

function Characters({ item }) {
  const { selectCard, currentlyOpen } = useCards();
  const wait = currentlyOpen.length > 1;

  const handleClick = (id) => {
    selectCard(id);
  };

  return (
    <button
      disabled={item.isVisible || wait}
      onClick={() => handleClick(item.id)}
      className={`${styles.card} card${item.id}`}
    >
      {item.isVisible ? (
        <img
          className={styles.char_img}
          src={require(`../../img/${item.name}.png`)}
          alt=""
        />
      ) : (
        <img
          className={styles.default_img}
          src={require("../../img/nonvisible.png")}
          alt="w"
        />
      )}
    </button>
  );
}

export default Characters;
