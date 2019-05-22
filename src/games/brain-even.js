import readlineSync from 'readline-sync';

const generateRandom = () => {
  const min = 1;
  const max = 100;
  const randomNumer = Math.floor(Math.random() * (max - min)) + 1;
  return randomNumer;
};
const playEven = () => {};
