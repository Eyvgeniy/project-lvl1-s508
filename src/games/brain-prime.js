import readlineSync from 'readline-sync';
import { askName, generateRandom } from '..';

const playPrime = () => {
  const welcomeMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".?';
  const name = askName(welcomeMessage);
  const checkPrime = (num) => {
    const iter = (number, check) => {
      if (check > Math.sqrt(number)) {
        return 'yes';
      }
      return number % check ? iter(number, check + 1) : 'no';
    };
    return iter(num, 2);
  };
  const iter = (rounds) => {
    const number = generateRandom(1, 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const answer = checkPrime(number);
    if (userAnswer === answer) {
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

export default playPrime;
