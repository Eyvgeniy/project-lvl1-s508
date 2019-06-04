import playGame from '..';
import generateRandom from '../utils';

const task = 'What is the result of the expression?';
const calculateExpession = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return a * b;
  }
};
const operators = ['+', '-', '*'];
const createGameData = () => {
  const num1 = generateRandom(1, 20);
  const num2 = generateRandom(1, 20);
  const randomOperator = generateRandom(0, operators.length);
  const question = `${num1} ${operators[randomOperator]} ${num2}`;
  const answer = String(calculateExpession(num1, num2, operators[randomOperator]));
  return { question, answer };
};
export default () => {
  playGame(task, createGameData);
};
