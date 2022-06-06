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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos veniam
        sapiente sunt eos deserunt debitis dolorum reiciendis placeat!
        <section>Score: {score}</section>
        <section>Moves: {moves}</section>
      </aside>
      <aside>
        <button onClick={handleClick}>Restart</button>
      </aside>
    </article>
  );
}

export default Instructions;
