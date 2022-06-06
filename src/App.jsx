import "./App.css";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Canvas from "./components/Canvas";
import Footer from "./components/Footer";
import { CardsProvider } from "./contexts/CardsContext";

function App() {
  const container = (
    <>
      <CardsProvider>
        <Header />
        <Instructions />
        <Canvas />
        <Footer />
      </CardsProvider>
    </>
  );
  return <div className="App">{container}</div>;
}

export default App;
