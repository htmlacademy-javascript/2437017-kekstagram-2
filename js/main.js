import {getData} from './api.js';
import {renderThumbnails} from './rendering-thumbnails.js';
import {initBigPicture} from './full-size-images.js';
import {initUploadForm} from './image-upload-form.js';
import {closePhotoEditor} from './image-upload-form.js';
import { setUserFormSubmit } from './hashtag-validator.js';
import { initFilters } from './filter.js';
// import { showErrorMessage } from './error-success.js';
const errorLoadDataTemplate = document.querySelector('#data-error').content;
const showErrorMessage = () => {
  console.log("ЛОХ");
  const errorArea = errorLoadDataTemplate.cloneNode(true);
  document.body.append(errorArea);

  const errorElement = document.body.querySelector('.data-error');

  setTimeout(() => {
    errorElement.remove();
  },5000);
};

const initApp = async () => {
  try {
    const photos = await getData();
    // ЭТОТ КОД ВЫПОЛНИТСЯ ТОЛЬКО ЕСЛИ getData УСПЕШЕН
    renderThumbnails(photos);
    initBigPicture(photos);
    initFilters(photos);
    initUploadForm(photos);
    setUserFormSubmit(closePhotoEditor);

  } catch (error) {
    showErrorMessage(); // Теперь сработает!

    initUploadForm();
    setUserFormSubmit(closePhotoEditor);
  }
};

initApp();
