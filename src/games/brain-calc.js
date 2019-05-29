import playGame from '..';
import generateRandom from '../utils';

const task = 'What is the result of the expression?';

export default () => {
  const playCalc = () => {
    const num1 = generateRandom(1, 20);
    const num2 = generateRandom(1, 20);
    const numberOfCases = 4;
    const randomOperator = generateRandom(1, numberOfCases);
    switch (randomOperator) {
      case 1:
        return { question: `${num1} + ${num2}`, answer: `${num1 + num2}` };
      case 2:
        return { question: `${num1} - ${num2}`, answer: `${num1 - num2}` };
      case 3:
        return { question: `${num1} * ${num2}`, answer: `${num1 * num2}` };
      default:
        return null;
    }
  };
  playGame(task, playCalc);
};
