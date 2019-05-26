import readlineSync from 'readline-sync';
import { askName, generateRandom } from '..';

const getRandomExpresion = (number1, number2) => {
  const randomNumer = generateRandom(1, 100);
  if (randomNumer > 1 && randomNumer <= 33) {
    console.log(`Question: ${number1} + ${number2}`);
    return number1 + number2;
    // eslint-disable-next-line no-else-return
  } else if (randomNumer > 33 && randomNumer <= 66) {
    console.log(`Question: ${number1} - ${number2}`);
    return number1 - number2;
    // eslint-disable-next-line no-else-return
  } else if (randomNumer > 66 && randomNumer <= 99) {
    console.log(`Question: ${number1} * ${number2}`);
    return number1 * number2;
  }
};

const playCalc = () => {
  const welcomeMessage = 'What is the result of the expression?';
  const name = askName(welcomeMessage);
  const iter = (rounds) => {
    const num1 = generateRandom(1, 20);
    const num2 = generateRandom(1, 20);
    const answer = getRandomExpresion(num1, num2);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === answer) {
      console.log('Correct!');
    } else {
      return console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}". Let's try again, ${name}!`,
      );
    }
    if (rounds < 1) {
      return console.log(`Congratulations, ${name}!`);
    }
    return iter(rounds - 1);
  };
  return iter(2);
};

export default playCalc;
