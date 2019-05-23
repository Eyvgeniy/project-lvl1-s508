import readlineSync from 'readline-sync';
import { askName, generateRandom } from '..';

const playProgression = () => {
  const welcomeMessage = 'What number is missing in the progression?';
  const name = askName(welcomeMessage);
  const randomProgression = (startNumber, step, randomStep) => {
    const start = startNumber;
    const iter = (number, acc) => {
      if (acc === 11) {
        return number;
      }
      if (acc === randomStep) {
        return iter(`${number} ..`, acc + 1);
      }
      const next = start + step * (acc - 1);
      return iter(`${number} ${next}`, acc + 1);
    };
    return iter(startNumber, 2);
  };
  const iter = (rounds) => {
    const startNumber = generateRandom(1, 10);
    const step = generateRandom(1, 10);
    const randomStep = generateRandom(1, 10);
    console.log(`Question: ${randomProgression(startNumber, step, randomStep)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const answer = startNumber + step(randomStep - 1);
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

export default playProgression;
