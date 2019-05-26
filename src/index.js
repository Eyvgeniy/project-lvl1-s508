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
