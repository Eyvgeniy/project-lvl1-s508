import readlineSync from 'readline-sync';

export default (welcomeMessage) => {
  console.log('Welcome to the Brain Games!');
  console.log(welcomeMessage);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};
