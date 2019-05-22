import readlineSync from 'readline-sync';
import askName from '..';

const generateRandom = () => {
  const min = 1;
  const max = 100;
  const randomNumer = Math.floor(Math.random() * (max - min)) + 1;
  return randomNumer;
};

const isEven = num => (num % 2 ? 'no' : 'yes');
const welcomeMessage = 'Answer "yes" if number even otherwise answer "no".';

const playEven = () => {
  const name = askName(welcomeMessage);
  const iter = (acc) => {
    const number = generateRandom();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const check = isEven(number);
    if (answer === check) {
      console.log('Correct!');
    } else {
      return console.log(
        `"${answer}" is wrong answer ;(. Correct answer was "${check}". Let's try again, ${name}!`,
      );
    }
    if (acc === 0) {
      return console.log(`Congratulations, ${name}!`);
    }
    return iter(acc - 1);
  };
  iter(2);
};

export default playEven;
