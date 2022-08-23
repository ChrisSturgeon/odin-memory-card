import { useEffect, useState } from 'react';
import { Card } from './components/Card';
import './App.css';
import uniqid from 'uniqid';
import { Scoreboard } from './components/Scoreboard';
import { Outcome } from './components/Outcome';
import { Welcome } from './components/Welcome';

import boxerImg from './imgs/boxer.jpeg';
import corgieImg from './imgs/corgie.jpeg';
import pugImg from './imgs/pug.jpeg';
import collieImg from './imgs/collie.jpeg';
import patchesImg from './imgs/patches.jpeg';
import charlesImg from './imgs/charles.jpeg';
import bubbsImg from './imgs/bubbs.jpeg';
import shibaImg from './imgs/shiba.jpeg';
import bullImg from './imgs/bulldog.jpeg';

function App() {
  const [cards, setCards] = useState([
    { id: 1, img: boxerImg, key: uniqid() },
    { id: 2, img: pugImg, key: uniqid() },
    { id: 3, img: corgieImg, key: uniqid() },
  ]);

  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState([]);
  const [level, setLevel] = useState(1);
  const [loser, setLoser] = useState(false);
  const [winner, setWinner] = useState(false);
  const [welcome, setWelcome] = useState(true);

  const addScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const levelUp = () => {
    setLevel((prevLevel) => prevLevel + 1);
  };

  const reset = () => {
    setScore(0);
    setMoves([]);
    setLevel(1);
    setWinner(false);
    setLoser(false);
    setWelcome(false);

    setCards([
      { id: 1, img: boxerImg, key: uniqid() },
      { id: 2, img: pugImg, key: uniqid() },
      { id: 3, img: corgieImg, key: uniqid() },
    ]);
  };

  const declareLoser = () => {
    console.log('tes');
  };

  const move = (event) => {
    const move = event.target.value;

    if (moves.includes(move)) {
      declareLoser();
      setCards([]);
      setLoser(true);
    } else {
      setMoves((prevMoves) => prevMoves.concat(move));
      addScore();
    }
  };

  const declareWinner = () => {
    setCards([]);
    setWinner(true);
  };

  useEffect(() => {
    if (highScore < score) {
      setHighScore(score);
    }
  }, [highScore, score]);

  useEffect(() => {
    let shuffledCards = cards
      .map((card) => ({
        card,
        sort: Math.random(),
      }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ card }) => card);

    setCards(shuffledCards);
  }, [score, level]);

  useEffect(() => {
    if (score === 3) {
      setCards((prevCards) =>
        prevCards.concat([
          { id: 4, img: collieImg, key: uniqid() },
          { id: 5, img: patchesImg, key: uniqid() },
          { id: 6, img: charlesImg, key: uniqid() },
        ])
      );
      levelUp();
    } else if (score === 6) {
      setCards((prevCards) =>
        prevCards.concat([
          { id: 7, img: bubbsImg, key: uniqid() },
          { id: 8, img: shibaImg, key: uniqid() },
          { id: 9, img: bullImg, key: uniqid() },
        ])
      );
      levelUp();
    } else if (score === 9) {
      declareWinner();
    }
  }, [score]);

  return (
    <div className="wrapper">
      <div className="header">
        <h1>Memory Game</h1>
        <Scoreboard score={score} highscore={highScore} level={level} />
      </div>
      <div className="cards-body">
        {welcome ? <Welcome reset={reset} /> : null}
        {!welcome ? <Card move={move} cards={cards} /> : null}
        {winner || loser ? (
          <Outcome winner={winner} loser={loser} reset={reset} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
