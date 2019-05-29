import playGame from '..';
import generateRandom from '../utils';

const isEven = num => num % 2 === 0;
const task = 'Answer "yes" if number even otherwise answer "no"';
export default () => {
  const playEven = () => {
    const question = generateRandom(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';
    return { question, answer };
  };
  playGame(task, playEven);
};
