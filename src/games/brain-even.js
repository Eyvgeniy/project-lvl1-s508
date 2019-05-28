import { playGame, generateRandom } from '..';

export default () => {
  const welcomeMessage = 'Answer "yes" if number even otherwise answer "no"';
  const isEven = num => num % 2 === 0;
  const playEven = () => {
    const question = generateRandom(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';
    return { question, answer };
  };
  playGame(welcomeMessage, playEven);
};
