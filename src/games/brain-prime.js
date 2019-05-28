import { playGame, generateRandom } from '..';

const welcomeMessage =
  'Answer "yes" if given number is prime. Otherwise answer "no".?';
export default () => {
  const playPrime = () => {
    const isPrimeNumber = num => {
      const iter = (number, startDivisor) => {
        if (startDivisor > Math.sqrt(number)) {
          return true;
        }
        return number % startDivisor ? iter(number, startDivisor + 1) : false;
      };
      return iter(num, 2);
    };
    const number = generateRandom(1, 100);
    const question = number;
    const answer = isPrimeNumber(question) ? 'yes' : 'no';
    return { question, answer };
  };

  playGame(welcomeMessage, playPrime);
};
