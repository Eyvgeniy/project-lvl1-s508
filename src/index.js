import readlineSync from 'readline-sync';

export const askName = (welcomeMessage) => {
  console.log('Welcome to the Brain Games!');
  console.log(welcomeMessage);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const generateRandom = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + 1;
  return randomNumber;
};

// eslint-disable-next-line consistent-return
export const checkAnswer = (userAnswer, answer, rounds, name) => {
  if (userAnswer === answer) {
    console.log('Correct!');
  } else {
    return console.log(
      `"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}". Let's try again, ${name}!`,
    );
  }
  if (rounds < 1) {
    return console.log(`Congratulations, ${name}!`);
  }
};
