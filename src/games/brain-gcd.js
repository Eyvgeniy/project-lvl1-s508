import readlineSync from 'readline-sync';
import { askName, generateRandom } from '..';

const playGcd = () => {
  const welcomeMessage = 'Find the greatest common divisor of given numbers.';
  const name = askName(welcomeMessage);
  const findGcd = (number1, number2) => {
    const maxNumber = Math.max(number1, number2);
    const minNumber = Math.min(number1, number2);
    const remainderDivision = maxNumber % minNumber;
    return remainderDivision ? findGcd(minNumber, remainderDivision) : minNumber;
  };
  const iter = (rounds) => {
    const num1 = generateRandom(1, 100);
    const num2 = generateRandom(1, 100);
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const answer = findGcd(num1, num2);
    if (userAnswer == answer) {
      console.log('Correct!');
    } else {
      return console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}". Let's try again, ${name}!`,
      );
    }
    if (rounds === 3) {
      return console.log(`Congratulations, ${name}!`);
    }
    return iter(rounds + 1);
  };
  return iter(1);
};

export default playGcd;
