import {photos} from './photos-generator.js';

console.log(photos);

// const config = {
//   PHOTOS_COUNT: 25,
//   LIKES_RANGE: { min: 15, max: 200 },
//   COMMENTS_RANGE: { min: 0, max: 30 },
//   AVATARS_RANGE: { min: 1, max: 6 },
//   MESSAGES: [
//     'Всё отлично!',
//     'В целом всё неплохо. Но не всё.',
//     'Когда вы делаете фотографию, хорошо бы убирать палец из кадра...',
//     'Моя бабушка случайно чихнула с фотоаппаратом в руках...',
//     'Я поскользнулся на банановой кожуре...',
//     'Лица у людей на фотке перекошены...'
//   ],
//   NAMES: ['Кирилл', 'Юлия', 'Денис', 'Даниил', 'Святослав', 'Макс', 'Анастасия', 'Анна', 'Артём', 'Михаил', 'Наталья']
// };

// // Вспомогательная функция для случайного числа getRandomInt
// const getRandomInteger = function ({min, max}) {
//   const minNum = Math.min (min, max);
//   const maxNum = Math.max (min, max);
//   return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// };

// /*id для коментов*/
// const createIdGenerator = () => {
//   let id = 0;
//   return () => ++id;
// };

// const photoId = createIdGenerator();
// const commentsId = createIdGenerator();

// const getRandomElement = (elements) => elements[getRandomInteger({min: 0, max: elements.length - 1})];


// const generateComments = function () {
//   return {
//     id: commentsId(),
//     avatar: `img/avatar-${getRandomInteger(config.AVATARS_RANGE)}.svg`,
//     message: getRandomElement(config.MESSAGES),
//     name: getRandomElement(config.NAMES),
//   };
// };

// const generatePhotos = function () {
//   const id = photoId();
//   return {
//     id,
//     url: `photos/${id}.jpg`,
//     description: 'Описание фото',
//     likes: getRandomInteger(config.LIKES_RANGE),
//     comments: Array.from({length:getRandomInteger(config.COMMENTS_RANGE)}, () => generateComments()),
//   };
// };

// const photos = Array.from({length:config.PHOTOS_COUNT}, () => generatePhotos());
// console.log(photos);
