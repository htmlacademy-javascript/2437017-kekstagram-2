import {getData} from './api.js';
import {renderThumbnails} from './rendering-thumbnails.js';
import {initBigPicture} from './full-size-images.js';
import {closePhotoEditor} from './image-upload-form.js';
import { setUserFormSubmit } from './hashtag-validator.js';

getData(renderThumbnails);
getData(initBigPicture);
setUserFormSubmit(closePhotoEditor);
