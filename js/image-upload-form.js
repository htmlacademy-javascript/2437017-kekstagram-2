import { descriptionInput, hashtagsInput, uploadForm, resetValidation, buttonSubmit } from './hashtag-validator.js';
import { initScaleControls, updateImageScale } from './image-editing-scale.js';
import { addSlider, deleteSlider, tracksSelectedEffect, resetsValuesElements, effectsList } from './slider-effect.js';
import { formStatus, fileType } from './data.js';
import { isEscapeKey } from './util.js';

// Элементы формы
const overlayImg = uploadForm.querySelector('.img-upload__overlay'); // контейнер редактирования загруженного изображения
const previewImg = uploadForm.querySelector('.img-upload__preview img'); // Предварительный просмотр изображения(само изображение)
const buttonReset = uploadForm.querySelector('#upload-cancel'); // Кнопка для закрытия формы, reset
const uploadFile = uploadForm.querySelector('#upload-file'); // input загрузка file

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {

    const elementError = document.querySelector(`.${formStatus.ERROR}`);
    if (document.contains(elementError)) {
      elementError.remove();
      buttonSubmit.disabled = false;
      return;
    }

    // Проверяем, не в фокусе ли поля ввода
    const isInputFocused = document.activeElement === hashtagsInput ||
                          document.activeElement === descriptionInput;
    //Если фокус не в полях ввода - закрываем форму
    if (!isInputFocused) {
      closePhotoEditor();
    }
  }
};

// Обработчик кнопки закрытия
const onCloseBtnClick = () => closePhotoEditor();

// Закрытие формы
function closePhotoEditor () {
  overlayImg.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  buttonReset.removeEventListener('click', onCloseBtnClick);
  effectsList.removeEventListener('change', tracksSelectedEffect);
  uploadFile.value = '';
  uploadForm.reset(); // Сбрасываем форму
  resetValidation(); // Сбрасываем валидатор
  updateImageScale(1);
  resetsValuesElements();
  deleteSlider();
  buttonSubmit.disabled = false;
}

// 2.Открытие формы после загрузки изображения
const openUploadedPhoto = (file) => {
  const imageUrl = URL.createObjectURL(file);
  previewImg.src = imageUrl;
  overlayImg.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open'); // После выбора изображения задаётся класс
  buttonReset.addEventListener('click', onCloseBtnClick); // удаляет с прослушиватель Х
  document.addEventListener('keydown', onDocumentKeydown); // удаляет с прослушивателя ESC
  initScaleControls();
  addSlider();
  tracksSelectedEffect();
};

// 1. инициализация загрузки формы
const initUploadForm = () => {
  uploadFile.addEventListener('change', (evt) => {
    const file = evt.target.files[0]; // получаем массив, фото пользователя.
    const validTypes = Object.values(fileType);

    if (file && validTypes.includes(file.type)) {
      openUploadedPhoto(file); // передаем файл в функцию открытия
    }
  });
};

export { initUploadForm, previewImg, closePhotoEditor };
