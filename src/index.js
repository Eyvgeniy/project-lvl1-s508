import readlineSync from 'readline-sync';

export const generateRandom = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + 1;
  return randomNumber;
};

export const playGame = (welcomeMessage, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(welcomeMessage);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, answer } = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}". Let's try again, ${name}!`,
      );
    }
  }

  console.log(`Congratulations, ${name}!`);
};
