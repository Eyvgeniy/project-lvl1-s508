import playGame from '..';
import generateRandom from '../utils';

const progressionLength = 10;
const task = 'What number is missing in the progression?';
const getQuestion = (start, diff, missingMemberIndex, length) => {
  let progression = '';
  for (let i = 0; i <= length; i += 1) {
    if (i === missingMemberIndex) {
      progression = `${progression} ..`;
    } else {
      progression = `${progression} ${start + diff * i}`;
    }
  }
  return progression;
};

const createGameData = () => {
  const start = generateRandom(1, 10);
  const diff = generateRandom(1, 10);
  const missingMemberIndex = generateRandom(0, progressionLength - 1);
  const question = getQuestion(start, diff, missingMemberIndex, progressionLength - 1);
  const answer = String(start + diff * missingMemberIndex);
  return { question, answer };
};
export default () => {
  playGame(task, createGameData);
};
