import playGame from '..';
import generateRandom from '../utils';

const task = 'What is the result of the expression?';
const calculateExp = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return a * b;
  }
};
const playCalc = () => {
  const num1 = generateRandom(1, 20);
  const num2 = generateRandom(1, 20);
  const operatorsList = ['+', '-', '*'];
  const randomOperator = generateRandom(0, operatorsList.length);
  const question = `${num1} ${operatorsList[randomOperator]} ${num2}`;
  const answer = String(calculateExp(num1, num2, operatorsList[randomOperator]));
  return { question, answer };
};
export default () => {
  playGame(task, playCalc);
};
