import playGame from '..';
import generateRandom from '../utils';

const task = 'What number is missing in the progression?';
const createProgressionWithMissingMember = (start, diff, missingMember) => {
  const progressionLength = 10;
  let progression = '';
  for (let i = 1; i <= progressionLength; i += 1) {
    if (i === missingMember) {
      progression += '.. ';
    } else {
      progression += `${start + diff * (i - 1)} `;
    }
  }
  return progression;
};

const createGameData = () => {
  const start = generateRandom(1, 10);
  const diff = generateRandom(1, 10);
  const missingMember = generateRandom(1, 10);
  const question = createProgressionWithMissingMember(start, diff, missingMember);
  const answer = String(start + diff * (missingMember - 1));
  return { question, answer };
};
export default () => {
  playGame(task, createGameData);
};
