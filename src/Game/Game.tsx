import { useState } from 'react';
import './Game.css';



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
      <div className="board">
        <div className="title-principal">
          <span>EL TABLERO DEL INGENIERO</span>
        </div>
        <div className="score-board">
          <div className="left-panel">
              <span className="title-home-visitors">HOME</span>
              <div className="board-points">
                <span>{homeScore}</span>
              </div>
              <div className='more-less'>
                <button className="button-minus" onClick={onHomeDecreasePoint}>-</button>
                <button className="button-plus" onClick={onHomeIncreasePoint}>+</button>
              </div>
            </div>
            <div className="middle-panel">
              <div className="board-points">
                11:21
              </div>
              <div>
                <span>PERIOD</span>
                <div className="board-points">
                  2
                </div>
              </div>
              <div>
                <button className="btn-reset" onClick={onResetPoints}>RESET</button>
              </div>
            </div>
            <div className="right-panel">
              <span className="title-home-visitors">VISITORS</span>
              <div className="board-points">
                <span>{visitScore}</span>
              </div>
              <div className="more-less">
                <button className="button-minus" onClick={onVisitDecreasePoint}>-</button>
                <button className="button-plus" onClick={onVisitIncreasePoint}>+</button>
              </div>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default Game;
