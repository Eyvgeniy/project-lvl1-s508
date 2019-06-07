import playGame from '..';
import generateRandom from '../utils';

const task = 'Find the greatest common divisor of given numbers.';
const findGreaterCommonDivisor = (a, b) => {
  const maxNumber = Math.max(a, b);
  const minNumber = Math.min(a, b);
  const remainder = maxNumber % minNumber;
  return remainder ? findGreaterCommonDivisor(minNumber, remainder) : minNumber;
};
const createGameData = () => {
  const a = generateRandom(1, 100);
  const b = generateRandom(1, 100);
  const question = `${a} ${b}`;
  const answer = String(findGreaterCommonDivisor(a, b));
  return { question, answer };
};
export default () => {
  playGame(task, createGameData);
};
