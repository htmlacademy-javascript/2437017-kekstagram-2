import {photos} from './photos-generator.js';

const containerPictures = document.querySelector('.pictures');
const listPictureFragment = document.createDocumentFragment();

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

const newPictures = photos;

newPictures.forEach(({url,description,likes,comments}) => {
  const picturesElement = templatePicture.cloneNode(true);
  const image = picturesElement.querySelector('.picture__img');
  image.src = url;
  image.alt = description;
  picturesElement.querySelector('.picture__likes').textContent = likes;
  picturesElement.querySelector('.picture__comments').textContent = comments.length;

  listPictureFragment.appendChild(picturesElement);
});

containerPictures.appendChild(listPictureFragment);

export {containerPictures};
