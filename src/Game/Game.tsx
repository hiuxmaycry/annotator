import './Game.css';
import Score from './Score';
import useScore from './useScore';

const Game = () => {
  const [homeScore, onHomeIncreaseScore, onHomeDecreaseScore, homeResetScore] =
    useScore();
  const [
    visitScore,
    onVisitIncreaseScore,
    onVisitDecreaseScore,
    visitResetScore
  ] = useScore();
  const onResetScores = () => {
    homeResetScore();
    visitResetScore();
  };

  return (
    <div className="app-container">
      <div className="board">
        <div className="principal-title">
          <h1>Annotator</h1>
        </div>
        <div className="board-container">
          <div className="left-panel">
            <Score
              label="home"
              score={homeScore}
              onDecreaseScore={onHomeDecreaseScore}
              onIncreaseScore={onHomeIncreaseScore}
            />
          </div>
          <div className="middle-panel">
            <div className="score-board">11:21</div>
            <div>
              <span className="score-board-title">PERIOD</span>
              <div className="score-board">2</div>
            </div>
            <div>
              <button
                className="reset-button"
                aria-label="Reset home and visit scores"
                type="button"
                onClick={onResetScores}
              >
                RESET
              </button>
            </div>
          </div>
          <div className="right-panel">
            <Score
              label="visit"
              score={visitScore}
              onDecreaseScore={onVisitDecreaseScore}
              onIncreaseScore={onVisitIncreaseScore}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
