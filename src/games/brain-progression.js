import { playGame, generateRandom } from '..';

const welcomeMessage = 'What number is missing in the progression?';

export default () => {
  const playProgression = () => {
    const randomProgression = (startNumber, step, randomStep) => {
      const start = startNumber;
      const iter = (number, acc) => {
        if (acc === 11) {
          return number;
        }
        if (acc === randomStep) {
          return iter(`${number} ..`, acc + 1);
        }
        const next = start + step * (acc - 1);
        return iter(`${number} ${next}`, acc + 1);
      };
      return iter(startNumber, 2);
    };

    const startNumber = generateRandom(1, 10);
    const step = generateRandom(1, 10);
    const randomStep = generateRandom(2, 10);
    const question = randomProgression(startNumber, step, randomStep);
    const answer = startNumber + step * (randomStep - 1);
    return { question, answer };
  };
  playGame(welcomeMessage, playProgression);
};
