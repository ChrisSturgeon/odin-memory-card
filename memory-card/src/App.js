import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { Card } from './components/Card';
import './App.css';
import uniqid from 'uniqid';
import { Scoreboard } from './components/Scoreboard';

function App() {
  const [cards, setCards] = useState([
    { id: 1, key: uniqid() },
    { id: 2, key: uniqid() },
    { id: 3, key: uniqid() },
  ]);

  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState([]);

  const addScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const move = (event) => {
    const move = event.target.value;

    if (moves.includes(move)) {
      setScore(0);
      setMoves([]);
    } else {
      setMoves((prevMoves) => prevMoves.concat(move));
      addScore();
    }

    console.log(moves);
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

  return (
    <div className="App">
      <Scoreboard score={score} highscore={highScore} />
      <Card move={move} cards={cards} />
      <button onClick={addScore}>Add</button>
    </div>
  );
}

export default App;
