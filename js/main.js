import {containerPictures} from './rendering-thumbnails.js';
import {openBigPicture} from './/full-size-images.js';

// 1.Открытие модалки при клике на миниатюру
containerPictures.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');// получаем id выбраной picture
  if (currentPicture){
    evt.preventDefault();
    openBigPicture(currentPicture.dataset.id); // передаем значение id
  }
});
