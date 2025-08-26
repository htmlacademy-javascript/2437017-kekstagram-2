
const route = {
  BASE_URL: 'https://31.javascript.htmlacademy.pro/kekstagram',
  GET: '/data',
  SEND: '/'
};

const formStatus = {
  SUCCESS: 'success',
  ERROR: 'error'
};

const config = {
  COMMENTS_PER_PORTION : 5,
  NUMBER_RANDOM_PHOTOS : 10,
  TIMEOUT : 5000,
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

export {formStatus, config, filters, validator, effects, route};
