import {photos} from './photos-generator.js';
const containerPictures = document.querySelector('.pictures');
const listPictureFragment = document.createDocumentFragment();

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

// const newPictures = photos;


photos.forEach((photo) => {
  const {id,url,description,likes,comments} = photo;
  const picturesElement = templatePicture.cloneNode(true);
  picturesElement.dataset.id = id;
  const image = picturesElement.querySelector('.picture__img');
  image.src = url;
  image.alt = description;
  picturesElement.querySelector('.picture__likes').textContent = likes;
  picturesElement.querySelector('.picture__comments').textContent = comments.length;
  listPictureFragment.appendChild(picturesElement);

});

containerPictures.appendChild(listPictureFragment);
export {containerPictures};
