import { playGame, generateRandom } from '..';

const welcomeMessage = 'What is the result of the expression?';

export default () => {
  // eslint-disable-next-line consistent-return
  const playCalc = () => {
    const num1 = generateRandom(1, 20);
    const num2 = generateRandom(1, 20);
    const randomOperator = generateRandom(1, 4);
    // eslint-disable-next-line default-case
    switch (randomOperator) {
      case 1:
        return { question: `${num1} + ${num2}`, answer: `${num1 + num2}` };
      case 2:
        return { question: `${num1} - ${num2}`, answer: `${num1 - num2}` };
      case 3:
        return { question: `${num1} * ${num2}`, answer: `${num1 * num2}` };
    }
  };
  playGame(welcomeMessage, playCalc);
};
