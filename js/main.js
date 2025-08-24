import {getData} from './api.js';
import {renderThumbnails} from './rendering-thumbnails.js';
import {initBigPicture} from './full-size-images.js';
import {initUploadForm} from './image-upload-form.js';
import {closePhotoEditor} from './image-upload-form.js';
import { setUserFormSubmit } from './hashtag-validator.js';
import { initFilters } from './filter.js';

async function initApp() {
  try {
    const photos = await getData();

    // ЭТОТ КОД ВЫПОЛНИТСЯ ТОЛЬКО ЕСЛИ getData УСПЕШЕН
    renderThumbnails(photos);
    initBigPicture(photos);
    initFilters(photos);
    initUploadForm(photos);
    setUserFormSubmit(closePhotoEditor);

  } catch (error) {
    // ЕСЛИ ОШИБКА - НИЧЕГО НЕ ВЫЗЫВАЕМ (кроме обработки ошибки)
    console.error('Не удалось загрузить данные:', error);

    // Можно инициализировать только то, что не требует данных
    // Например, форму загрузки (если она работает без данных сервера)
    initUploadForm();
    setUserFormSubmit(closePhotoEditor);
  }
}

initApp();

