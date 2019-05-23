import readlineSync from 'readline-sync';
import { askName, generateRandom } from '..';

const isEven = num => (num % 2 ? 'no' : 'yes');

const playEven = () => {
  const welcomeMessage = 'Answer "yes" if number even otherwise answer "no".';
  const name = askName(welcomeMessage);
  const iter = (rounds) => {
    const number = generateRandom();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const answer = isEven(number);
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      return console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}". Let's try again, ${name}!`,
      );
    }
    if (rounds < 2) {
      return console.log(`Congratulations, ${name}!`);
    }
    return iter(rounds - 1);
  };
  iter(3);
};

export default playEven;
