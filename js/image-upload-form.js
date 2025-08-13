import { descriptionInput, hashtagsInput, uploadForm, initValidation } from './hashtag-validator.js';
import { initScaleControls, updateImageScale } from './image-editing-scale.js';
import { addSlider, deleteSlider, tracksSelectedEffect, resetsValuesElements, effectsList } from './slider-effect.js';

// Элементы формы
const overlayImg = uploadForm.querySelector('.img-upload__overlay'); // контейнер редактирования загруженного изображения
const previewImg = uploadForm.querySelector('.img-upload__preview img'); // Предварительный просмотр изображения(само изображение)
const buttonReset = uploadForm.querySelector('#upload-cancel'); // Кнопка для закрытия формы, reset
const uploadFile = uploadForm.querySelector('#upload-file'); // input загрузка file

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
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
  updateImageScale(1);
  resetsValuesElements();
  deleteSlider();
}

// Открытие формы после загрузки изображения
const openUploadedPhoto = () => {
  uploadFile.addEventListener('change', (evt) => {
    const file = evt.target.files[0]; // получаем массив, фото пользователя.
    const imageUrl = URL.createObjectURL(file);
    previewImg.src = imageUrl;

    overlayImg.classList.remove('hidden'); // После выбора изображения удаляется класс
    document.querySelector('body').classList.add('modal-open'); // После выбора изображения задаётся класс

    buttonReset.addEventListener('click', onCloseBtnClick); // удаляет с прослушиватель Х
    document.addEventListener('keydown', onDocumentKeydown); // удаляет с прослушивателя ESC
    initValidation();
    initScaleControls();
    addSlider();
    tracksSelectedEffect();
  });
};

export { openUploadedPhoto, previewImg };
