import playGame from '..';
import generateRandom from '../utils';

const task = 'What number is missing in the progression?';
const randomProgression = (startNumber, step, randomStep) => {
  const start = startNumber;
  const iter = (number, acc) => {
    const numberOfSteps = 10;
    if (acc > numberOfSteps) {
      return number;
    }
    if (acc === randomStep) {
      return iter(`${number} ..`, acc + 1);
    }
    const next = start + step * (acc - 1);
    return iter(`${number} ${next}`, acc + 1);
  };
  return iter(startNumber, 2);
};

const playProgression = () => {
  const startNumber = generateRandom(1, 10);
  const step = generateRandom(1, 10);
  const randomStep = generateRandom(2, 10);
  const question = randomProgression(startNumber, step, randomStep);
  const answer = startNumber + step * (randomStep - 1);
  return { question, answer };
};
export default () => {
  playGame(task, playProgression);
};
