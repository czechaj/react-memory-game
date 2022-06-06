import React from "react";
import { useCards } from "../../contexts/CardsContext";
import styles from "./styles.module.css";

function Result() {
  const { score, moves, gameOver, setGameOver } = useCards();
  const handleClick = () => {
    setGameOver(!gameOver);
  };
  return (
    <div>
      <section className={styles.result}>
        <div className={styles.header}>Congratulations</div>
        <div className={styles.content}>
          <h1>Score:</h1>
          <p>{score}</p>
        </div>
        <div className={styles.content}>
          <h1>Moves:</h1>
          <p>{moves}</p>
        </div>
        <div className={styles.options}>
          <button onClick={handleClick}>Restart</button>
        </div>
      </section>
    </div>
  );
}

export default Result;
