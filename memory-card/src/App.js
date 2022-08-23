import { useEffect, useState } from 'react';
import { Card } from './components/Card';
import './App.css';
import uniqid from 'uniqid';
import { Scoreboard } from './components/Scoreboard';

import boxerImg from './boxer.jpeg';
import terrierImg from './imgs/terrier.jpeg';
import pugImg from './imgs/pug.jpeg';

function App() {
  const [cards, setCards] = useState([
    { id: 1, img: boxerImg, key: uniqid() },
    { id: 2, img: pugImg, key: uniqid() },
    { id: 3, img: terrierImg, key: uniqid() },
  ]);

  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState([]);
  const [stopper, setStopper] = useState(true);

  // useEffect(() => {
  //   if (score === 3) {
  //     console.log('level-up!');
  //     setCards
  //   }
  // }, [score]);

  const addScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const move = (event) => {
    const move = event.target.value;

    if (moves.includes(move)) {
      setScore(0);
      setMoves([]);

      setCards([
        { id: 1, img: boxerImg, key: uniqid() },
        { id: 2, img: pugImg, key: uniqid() },
        { id: 3, img: terrierImg, key: uniqid() },
      ]);
    } else {
      setMoves((prevMoves) => prevMoves.concat(move));
      addScore();
    }
  };

  useEffect(() => {
    if (highScore < score) {
      setHighScore(score);
    }
  }, [score]);

  useEffect(() => {
    let shuffledCards = cards
      .map((card) => ({
        card,
        sort: Math.random(),
      }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ card }) => card);

    setCards(shuffledCards);
  }, [score]);

  useEffect(() => {
    if (score === 3) {
      console.log('level-up!');
      setCards((prevCards) =>
        prevCards.concat([
          { id: 4, img: boxerImg, key: uniqid() },
          { id: 5, img: pugImg, key: uniqid() },
          { id: 6, img: terrierImg, key: uniqid() },
        ])
      );
    }
  }, [score]);

  return (
    <div className="App">
      <Scoreboard score={score} highscore={highScore} />
      <Card move={move} cards={cards} />
      <button onClick={addScore}>Add</button>
    </div>
  );
}

export default App;
