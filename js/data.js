const formStatus = {
  SUCCESS: 'success',
  ERROR: 'error'
};

const config = {
  COMMENTS_PER_PORTION : 5,
  NUMBER_RANDOM_PHOTOS : 10,
  SEC : 5000,
};

const filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const validator = {
  HASHTAG_REGEX: /^#[a-zа-яё0-9]{1,19}$/i,
  NUMBER_HASHTAGS: 5,
  LENGTH_COMMENT: 140,
};

const effects = {
  chrome: {filter: 'grayscale', unit: '', min: 0, max: 1, step: 0.1,},
  sepia: {filter: 'sepia', unit: '', min: 0, max: 1, step: 0.1,},
  marvin: {filter: 'invert', unit: '%', min: 0, max: 100, step: 1,},
  phobos: {filter: 'blur', unit: 'px', min: 0, max: 3, step: 0.1,},
  heat: {filter: 'brightness', unit: '', min: 1, max: 3, step: 0.1,},
  none: {filter: null,},
};

export {formStatus, config, filters, validator, effects};

// const config = {
//   COMMENTS_PER_PORTION : 5,
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
//   NAMES: ['Кирилл', 'Юлия', 'Денис', 'Даниил', 'Святослав', 'Макс', 'Анастасия', 'Анна', 'Артём', 'Михаил', 'Наталья'],
//   PHOTO_DESCRIPTION: [
//     'Идеальный момент – солнце, улыбки и никаких облаков!',
//     'Кадр удался, но что-то всё же не так… Может, ракурс?',
//     'Фототехника – сложная штука. Особенно когда в кадре тень от собственного уха.',
//     'Пытался поймать идеальный закат, но села батарея…',
//     'Вот оно – доказательство, что гравитация работает!',
//     'Когда все моргнули, кроме того одного человека…',
//   ],
// };

// export {config};
