export default (min, max) => {
  const createRandomNumber = Math.floor(Math.random() * max + min);
  return createRandomNumber;
};
