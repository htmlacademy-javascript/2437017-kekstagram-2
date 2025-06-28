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

/*id для коментов*/
const createIdGenerator = () => {
  let id = 0;
  return () => ++id;
};

const photoId = createIdGenerator();
const commentsId = createIdGenerator();

const getRandomElement = (elements) => elements[getRandomInteger({min: 0, max: elements.length - 1})];


const generateComments = function () {
  return {
    id: commentsId(),
    avatar: `img/avatar-${getRandomInteger(config.avatarsRange)}.svg`,
    message: getRandomElement(config.messages),
    name: getRandomElement(config.names),
  };
};

const generatePhotos = function () {
  const id = photoId();
  return {
    id,
    url: `photos/${id}.jpg`,
    description: 'Описание фото',
    likes: getRandomInteger(config.likesRange),
    comments: Array.from({length:getRandomInteger(config.commentsRange)}, () => generateComments()),
  };
};

const photos = Array.from({length:config.photosCount}, () => generatePhotos());
console.log(photos);
