let nextId = 1;

const config = {
  photosCount: 25,
  likesRange: { min: 15, max: 200 },
  commentsRange: { min: 0, max: 30 },
  avatarsRange: { min: 1, max: 6 },
  messages: [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра...',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках...',
    'Я поскользнулся на банановой кожуре...',
    'Лица у людей на фотке перекошены...'
  ],
  names: ['Кирилл', 'Юлия', 'Денис', 'Даниил', 'Святослав', 'Макс', 'Анастасия', 'Анна', 'Артём', 'Михаил', 'Наталья']
};


// Вспомогательная функция для случайного числа getRandomInt
const getRandomInteger = function ({min, max}) {
  const minNum = Math.min (min, max);
  const maxNum = Math.max (min, max);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};

const getRandomElementArray = (elements) => elements[getRandomInteger({min: 0, max: elements.length - 1})];


/* Генератор случайного id комментариев */
const createIdGenerator = () => {
  let lastId = 0;
  return () => ++lastId;
};
/* id комментариев */
const commentId = createIdGenerator();

const generateComments = function () {
  return {
    id: commentId(),
    avatar: `img/avatar-${getRandomInteger(config.avatarsRange)}.svg`,
    message: getRandomElementArray(config.messages),
    name: getRandomElementArray(config.names),
  };
};

/* Генератор фото*/
const generatePhotos = function (id) {

  return {
    id,
    url: `photos/${id}.jpg`,
    description: 'Описание фото',
    likes: getRandomInteger(config.likesRange),
    comments: Array.from({length:getRandomInteger(config.commentsRange)}, generateComments),
  };
};

const photos = Array.from({length:config.photosCount}, () => generatePhotos(nextId++));
console.log(photos);
