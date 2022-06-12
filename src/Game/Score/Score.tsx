import React from 'react';

const Score = ({
  label,
  score,
  onDecreaseScore,
  onIncreaseScore
}: {
  label: string;
  score: number;
  onDecreaseScore: () => void;
  onIncreaseScore: () => void;
}) => (
  <>
    <span className="score-board-title">{label.toUpperCase()}</span>
    <div className="score-board">
      <span>{score}</span>
    </div>
    <div className="more-less-panel">
      <button
        className="minus-button"
        aria-label={`Add ${label} score`}
        type="button"
        onClick={onDecreaseScore}
      >
        -
      </button>
      <button
        className="plus-button"
        aria-label={`Extract ${label} score`}
        type="button"
        onClick={onIncreaseScore}
      >
        +
      </button>
    </div>
  </>
);

export default Score;
