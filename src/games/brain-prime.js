import playGame from '..';
import generateRandom from '../utils';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".?';
const isPrimeNumber = (num) => {
  const iter = (number, startDivisor) => {
    if (startDivisor > Math.sqrt(number)) {
      return true;
    }
    return number % startDivisor ? iter(number, startDivisor + 1) : false;
  };
  return iter(num, 2);
};
export default () => {
  const playPrime = () => {
    const question = generateRandom(1, 100);
    const answer = isPrimeNumber(question) ? 'yes' : 'no';
    return { question, answer };
  };

  playGame(task, playPrime);
};
