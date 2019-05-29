import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (task, playGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, answer } = playGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${name}!`);
    }
  }

  console.log(`Congratulations, ${name}!`);
};
