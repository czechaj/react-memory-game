import {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
import styles from "../components/Characters/styles.module.css";
import imageBox from "../data/imageBox";

const CardsContext = createContext();

const CardsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [pairs, setPairs] = useState([]);
  const [currentlyOpen, setCurrentlyOpen] = useState([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(pairs.length === 8);

  const shuffle = useCallback((item) => {
    let currentIndex = item.length;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [item[currentIndex], item[randomIndex]] = [
        item[randomIndex],
        item[currentIndex],
      ];
    }
    return item;
  }, []);

  const selectCard = (id) => {
    const selected = items.find((item) => item.id === id);
    selected.isVisible = true;
    const selectedCard = document.querySelector(`.card${selected.id}`);
    selectedCard.classList.toggle(`${styles.front}`);
    setCurrentlyOpen((prev) => {
      return [selected, ...prev];
    });
  };

  const compare = useCallback(
    (arr) => {
      if (arr.length > 1) {
        const selectedCard1 = document.querySelector(`.card${arr[0].id}`);
        const selectedCard2 = document.querySelector(`.card${arr[1].id}`);
        if (arr[1].name === arr[0].name) {
          setPairs((prev) => {
            return [...prev, { 1: currentlyOpen[0], 2: currentlyOpen[1] }];
          });
          setScore((score) => score + 50);
          selectedCard1.classList.add(`${styles.success}`);
          selectedCard2.classList.add(`${styles.success}`);
        } else {
          arr[0].isVisible = false;
          arr[1].isVisible = false;

          selectedCard1.classList.toggle(`${styles.front}`);
          selectedCard2.classList.toggle(`${styles.front}`);
          setScore((score) => score - 20);
        }
        setMoves((moves) => moves + 1);
        return setCurrentlyOpen([]);
      }
    },
    [currentlyOpen]
  );

  const restart = useCallback(() => {
    setCurrentlyOpen([]);
    setScore(0);
    setMoves(0);
    setPairs([]);
    setItems(shuffle(imageBox));
    imageBox.map((item) => (item.isVisible = false));
    const cards = document.getElementsByClassName(`${styles.card}`);
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove(`${styles.front}`);
      cards[i].classList.remove(`${styles.success}`);
    }
  }, [shuffle]);

  useEffect(() => {
    setTimeout(() => compare(currentlyOpen), 1200);
  }, [currentlyOpen, compare, shuffle]);

  useEffect(() => {
    setItems(shuffle(imageBox));
  }, [shuffle]);

  useEffect(() => {
    restart();
  }, [gameOver, restart]);

  const values = {
    items,
    setItems,
    moves,
    score,
    pairs,
    setPairs,
    currentlyOpen,
    setCurrentlyOpen,
    selectCard,
    shuffle,
    gameOver,
    setGameOver,
  };

  return (
    <CardsContext.Provider value={values}> {children} </CardsContext.Provider>
  );
};

const useCards = () => useContext(CardsContext);

export { useCards, CardsProvider };
