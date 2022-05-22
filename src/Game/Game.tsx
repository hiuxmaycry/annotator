import { useState } from 'react';

const Game = () => {
  const [ homeScore, setHomeScore ] = useState(0);
  const [ visitScore, setVisitScore ] = useState(0);
  const onHomeIncreasePoint = () => {
    setHomeScore(homeScore + 1)
  };
  const onVisitIncreasePoint = () => {
    setVisitScore(visitScore + 1)
  };
  const onHomeDecreasePoint = () => {
    setHomeScore(homeScore? homeScore - 1: 0)
  };
  const onVisitDecreasePoint = () => {
    setVisitScore(visitScore? visitScore - 1: 0)
  };
  const onResetPoints = () => {
    setHomeScore(0);
    setVisitScore(0);
  };

  return (
    <div className="app-container">
      <div className="left-panel">
        <span>Home</span>
        <button onClick={onHomeIncreasePoint}>+</button>
        <button onClick={onHomeDecreasePoint}>-</button>
      </div>
      <div className="middle-panel">
        <button onClick={onResetPoints}>reset</button>
        <span>{homeScore}-{visitScore}</span>
      </div>
      <div className="right-panel">
        <span>Visitors</span>
        <button onClick={onVisitIncreasePoint}>+</button>
        <button onClick={onVisitDecreasePoint}>-</button>
      </div>
    </div>
  );
}

export default Game;
