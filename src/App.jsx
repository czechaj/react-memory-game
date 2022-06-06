import React from "react";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Canvas from "./components/Canvas";
import Result from "./components/Result";
import Footer from "./components/Footer";
import "./App.css";
import { useCards } from "./contexts/CardsContext";

function App() {
  const { pairs } = useCards();
  const container = (
    <>
      <Header />
      {pairs.length === 8 ? (
        <Result />
      ) : (
        <React.Fragment>
          <Instructions />
          <Canvas />
        </React.Fragment>
      )}

      <Footer />
    </>
  );
  return <div className="App">{container}</div>;
}

export default App;
