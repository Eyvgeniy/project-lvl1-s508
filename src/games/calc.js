import playGame from '..';
import generateRandom from '../utils';

const task = 'What is the result of the expression?';
const calculateExpession = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};
const operators = ['+', '-', '*'];
const createGameData = () => {
  const a = generateRandom(1, 20);
  const b = generateRandom(1, 20);
  const operator = generateRandom(0, operators.length - 1);
  const question = `${a} ${operators[operator]} ${b}`;
  const answer = String(calculateExpession(a, b, operators[operator]));
  return { question, answer };
};
export default () => {
  playGame(task, createGameData);
};
