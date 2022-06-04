import React from "react";
import styles from "./styles.module.css";

function Instructions() {
  return (
    <article>
      <aside className={styles.instructions}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos veniam
        sapiente sunt eos deserunt debitis dolorum reiciendis placeat!
        <section>Score</section>
      </aside>
      <aside>
        <button>Try again</button>
      </aside>
    </article>
  );
}

export default Instructions;
