import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const choices = ["Rock", "Paper", "Scissor"];

  function handleAnsSubmit(player) {
    const computer = choices[parseInt(Math.random() * choices.length)];
    setPlayerChoice(player);
    setComputerChoice(computer);

    if (player === computer) {
      setResult("DRAW!!!");
    } else if (
      (player === "Rock" && computer === "Scissor") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissor" && computer === "Paper")
    ) {
      setResult("PLAYER WON!!!!");
    } else {
      setResult("COMPUTER WON");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Rock Paper Scissors</h1>
      <div className="choices-container">
        {choices.map((item) => {
          return (
            <button
              key={item}
              className="choice-btn"
              onClick={() => handleAnsSubmit(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="result-container">
        <h3 className="result">PLAYER'S CHOICE: <span>{playerChoice}</span></h3>
        <h3 className="result">COMPUTER'S CHOICE: <span>{computerChoice}</span></h3>
        <h3 className="result">RESULT: <span>{result}</span></h3>
      </div>
    </div>
  );
};

export default App;
