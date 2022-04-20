import { useState } from 'react';

const Game = () => {
  const [ homeScore, setHomeScore ] = useState(0);
  const [ visitScore, setVisitScore ] = useState(0);
  const onHomePoint = () => { setHomeScore(homeScore + 1) };
  const onVisitPoint = () => { setVisitScore(visitScore + 1) };
  const onResetPoints = () => {
    setHomeScore(0);
    setVisitScore(0);
  };

  return (
    <div className="app-container">
      <div className="left-panel">
        <button onClick={onHomePoint}>+</button>
      </div>
      <div className="middle-panel">
        <button onClick={onResetPoints}>reset</button>
        <span>{homeScore}</span>
        <span>{visitScore}</span>
      </div>
      <div className="right-panel">
        <button onClick={onVisitPoint}>+</button>
      </div>
    </div>
  );
}

export default Game;
