import {getData} from './api.js';
import {renderThumbnails} from './rendering-thumbnails.js';
import {initBigPicture} from './full-size-images.js';
import {initUploadForm} from './image-upload-form.js';
import {closePhotoEditor} from './image-upload-form.js';
import { setUserFormSubmit } from './hashtag-validator.js';
import { initFilters } from './filter.js';
import { showErrorMessage } from './error-success.js';

const initApp = async () => {
  try {
    const photos = await getData();
    renderThumbnails(photos);
    initBigPicture(photos);
    initFilters(photos);
    initUploadForm(photos);
    setUserFormSubmit(closePhotoEditor);
  } catch (error) {
    showErrorMessage();
    initUploadForm();
    setUserFormSubmit(closePhotoEditor);
  }
};

initApp();
