import "./App.css";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Canvas from "./components/Canvas";
import Footer from "./components/Footer";

function App() {
  const container = (
    <>
      <Header />
      <Instructions />
      <Canvas />
      <Footer />
    </>
  );
  return <div className="App">{container}</div>;
}

export default App;
