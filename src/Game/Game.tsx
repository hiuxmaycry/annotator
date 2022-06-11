import { useState } from 'react';
import './Game.css';

const Game = () => {
  const [homeScore, setHomeScore] = useState(0);
  const [visitScore, setVisitScore] = useState(0);
  const onHomeIncreasePoint = () => {
    setHomeScore(homeScore + 1);
  };
  const onVisitIncreasePoint = () => {
    setVisitScore(visitScore + 1);
  };
  const onHomeDecreasePoint = () => {
    setHomeScore(homeScore ? homeScore - 1 : 0);
  };
  const onVisitDecreasePoint = () => {
    setVisitScore(visitScore ? visitScore - 1 : 0);
  };
  const onResetPoints = () => {
    setHomeScore(0);
    setVisitScore(0);
  };

  return (
    <div className="app-container">
      <div className="board">
        <div className="principal-title">
          <h1>Annotator</h1>
        </div>
        <div className="score-board">
          <div className="left-panel">
            <span className="point-board-title">HOME</span>
            <div className="point-board">
              <span>{homeScore}</span>
            </div>
            <div className="more-less-panel">
              <button className="minus-button" aria-label="Add home points" type="button" onClick={onHomeDecreasePoint}>-</button>
              <button className="plus-button" aria-label="Decrease home points" type="button" onClick={onHomeIncreasePoint}>+</button>
            </div>
          </div>
          <div className="middle-panel">
            <div className="point-board">
              11:21
            </div>
            <div>
              <span className="point-board-title">PERIOD</span>
              <div className="point-board">
                2
              </div>
            </div>
            <div>
              <button className="reset-button" aria-label="Reset home and visit points" type="button" onClick={onResetPoints}>RESET</button>
            </div>
          </div>
          <div className="right-panel">
            <span className="point-board-title">VISITORS</span>
            <div className="point-board">
              <span>{visitScore}</span>
            </div>
            <div className="more-less-panel">
              <button className="minus-button" aria-label="Add visit points" type="button" onClick={onVisitDecreasePoint}>-</button>
              <button className="plus-button" aria-label="Decrease visit points" type="button" onClick={onVisitIncreasePoint}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Game;
