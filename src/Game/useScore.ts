import { useState } from 'react';

const useScore = (): [
  /** Value to represent a score */
  score: number,
  /** Increments the current score by one point */
  increaseScore: () => void,
  /** Decrements the current score by one point until it reaches zero */
  decreaseScore: () => void,
  /** Set the current score to zero */
  resetScore: () => void
] => {
  const [score, setScore] = useState(0);
  const increaseScore = () => {
    setScore(score + 1);
  };
  const decreaseScore = () => {
    setScore(score ? score - 1 : 0);
  };
  const resetScore = () => {
    setScore(0);
  };

  return [score, increaseScore, decreaseScore, resetScore];
};

export default useScore;
