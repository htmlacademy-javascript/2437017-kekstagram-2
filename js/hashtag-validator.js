import {getMessageElement} from './error-success-form.js';
import {sendData} from './api.js';

const uploadForm = document.querySelector('.img-upload__form'); //Forma
const hashtagsInput = uploadForm.querySelector('.text__hashtags'); // input для хэштегов
const descriptionInput = uploadForm.querySelector('.text__description'); // textarea для коммент
const buttonSubmit = uploadForm.querySelector('#upload-submit');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

function initValidation() {
  const HASHTAG_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;

  // 1. Проверка на количество хэштегов (не больше 5)
  pristine.addValidator(
    hashtagsInput,(value) => {
      const hashtagsArray = value.split(' ').filter((el) => el.trim() !== '');
      return !value.trim() || hashtagsArray.length <= 5;
    },
    'Максимум 5 хэштегов!',
    2,
    true
  );

  // 2. Проверка формата и уникальности хэштегов
  pristine.addValidator(
    hashtagsInput,(value) => {
      const hashtagsArray = value.split(' ').filter((el) => el.trim() !== '');

      for (let i = 0; i < hashtagsArray.length; i++) {
        const current = hashtagsArray[i];
        if (!HASHTAG_REGEX.test(current)) {
          return false;
        }

        for (let j = i + 1; j < hashtagsArray.length; j++) {
          if (current.toLowerCase() === hashtagsArray[j].toLowerCase()) {
            return false;
          }
        }
      }
      return true;
    },
    'Хэштег должен начинаться с #, содержать буквы/цифры (1-19 символов) и быть уникальным',
    1,
    true
  );

  // 3. Проверка комментария (не больше 140 символов)
  pristine.addValidator(
    descriptionInput,
    (value) => value.length <= 140,
    'Комментарий не должен превышать 140 символов',
    1,
    true
  );
}

// Обработчик отправки формы
const setUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) { //если true
      const formData = new FormData(evt.target); // собираем все данные из формы
      sendData (onSuccess, getMessageElement, formData);
      buttonSubmit.disabled = true;
    }
  });
};
export {descriptionInput, hashtagsInput, uploadForm, buttonSubmit };
export {setUserFormSubmit, initValidation};
