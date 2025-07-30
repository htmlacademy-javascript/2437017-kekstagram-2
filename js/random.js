// Вспомогательная функция для случайного числа getRandomInt
const getRandomInteger = function ({min, max}) {
  const minNum = Math.min (min, max);
  const maxNum = Math.max (min, max);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};


const getRandomElement = (elements) => elements[getRandomInteger({min: 0, max: elements.length - 1})];

export {getRandomInteger, getRandomElement};
