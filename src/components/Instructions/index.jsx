import React from "react";
import { useCards } from "../../contexts/CardsContext";
import styles from "./styles.module.css";
function Instructions() {
  const { score, moves, gameOver, setGameOver } = useCards();

  const handleClick = () => {
    setGameOver(!gameOver);
  };

  return (
    <article>
      <aside className={styles.instructions}>
        <section className={styles.rules}>
          You will earn 50 points for pairs and lose 20 for fails!
        </section>
        <section className={styles.scoreboard}>Score: {score}</section>
        <section className={styles.scoreboard}>Moves: {moves}</section>
      </aside>
      <aside>
        <button className={styles.restart} onClick={handleClick}>
          Restart
        </button>
      </aside>
    </article>
  );
}

export default Instructions;
