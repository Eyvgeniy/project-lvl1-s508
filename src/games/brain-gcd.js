import { playGame, generateRandom } from '..';

export default () => {
  const welcomeMessage = 'Find the greatest common divisor of given numbers.';
  const playGcd = () => {
    const findGcd = (number1, number2) => {
      const maxNumber = Math.max(number1, number2);
      const minNumber = Math.min(number1, number2);
      const remainderDivision = maxNumber % minNumber;
      return remainderDivision
        ? findGcd(minNumber, remainderDivision)
        : minNumber;
    };
    const num1 = generateRandom(1, 100);
    const num2 = generateRandom(1, 100);
    const question = `${num1} ${num2}`;
    const answer = `${findGcd(num1, num2)}`;
    return { question, answer };
  };

  playGame(welcomeMessage, playGcd);
};
