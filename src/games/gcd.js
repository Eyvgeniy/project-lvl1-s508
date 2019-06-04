import playGame from '..';
import generateRandom from '../utils';

const task = 'Find the greatest common divisor of given numbers.';
const findGreaterCommonDivisor = (number1, number2) => {
  const maxNumber = Math.max(number1, number2);
  const minNumber = Math.min(number1, number2);
  const remainderDivision = maxNumber % minNumber;
  return remainderDivision ? findGreaterCommonDivisor(minNumber, remainderDivision) : minNumber;
};
const createGameData = () => {
  const num1 = generateRandom(1, 100);
  const num2 = generateRandom(1, 100);
  const question = `${num1} ${num2}`;
  const answer = `${findGreaterCommonDivisor(num1, num2)}`;
  return { question, answer };
};
export default () => {
  playGame(task, createGameData);
};
