import playGame from '..';
import generateRandom from '../utils';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".?';
const isPrime = (num) => {
  const iter = (number, startDivisor) => {
    if (startDivisor > Math.sqrt(number)) {
      return true;
    }
    return number % startDivisor ? iter(number, startDivisor + 1) : false;
  };
  return num > 0 ? iter(num, 2) : false;
};

const playPrime = () => {
  const question = generateRandom(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};
export default () => {
  playGame(task, playPrime);
};
