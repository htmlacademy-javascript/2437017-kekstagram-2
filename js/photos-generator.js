import {config} from './data.js';
import {getRandomInteger, getRandomElement} from './random.js';
import {photoId, commentsId} from './generatingId.js';

const generateComments = function () {
  return {
    id: commentsId(),
    avatar: `img/avatar-${getRandomInteger(config.AVATARS_RANGE)}.svg`,
    message: getRandomElement(config.MESSAGES),
    name: getRandomElement(config.NAMES),
  };
};

const generatePhotos = function () {
  const id = photoId();
  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomElement(config.PHOTO_DESCRIPTION),
    likes: getRandomInteger(config.LIKES_RANGE),
    comments: Array.from({length:getRandomInteger(config.COMMENTS_RANGE)}, () => generateComments()),
  };
};

const photos = Array.from({length:config.PHOTOS_COUNT}, () => generatePhotos());

export {photos};
