import React from "react";
import "./styles.module.css";
import Characters from "../Characters";
import { useCards } from "../../contexts/CardsContext";

function Canvas() {
  const { items } = useCards();

  return (
    <main>
      {items.map((char) => {
        return <Characters item={char} key={char.id} />;
      })}
    </main>
  );
}

export default Canvas;
