import {buttonSubmit} from './hashtag-validator.js';
import {config} from './data.js';
import { isEscapeKey } from './util.js';

const errorLoadDataTemplate = document.querySelector('#data-error').content;


const showErrorMessage = () => {
  const errorArea = errorLoadDataTemplate.cloneNode(true);
  document.body.append(errorArea);

  const errorElement = document.body.querySelector('.data-error');

  setTimeout(() => {
    errorElement.remove();
  },config.TIMEOUT);
};

const getMessageElement = (element) => { //success или error

  const template = document.getElementById(element);
  const cloneTemplate = template.content.cloneNode(true);
  const messageElement = cloneTemplate.firstElementChild;
  document.body.appendChild(messageElement);

  const closeButton = messageElement.querySelector('button');

  const closeMessage = () => {
    buttonSubmit.disabled = false;
    messageElement.remove();
    document.removeEventListener('click', onDocumentClick);
  };

  // обработка Escape
  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      messageElement.remove();
      document.removeEventListener('keydown', onDocumentKeydown); // Удаляем обработчик
    }
  };

  function onDocumentClick(event) {
    if (!event.target.closest(`.${element}__inner`)) {
      closeMessage();
    }
  }

  if (messageElement.parentNode) {
    // Добавляем обработчик закрытия по кнопке
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        closeMessage();
      });
    }

    document.addEventListener('click', onDocumentClick);
    document.addEventListener('keydown', onDocumentKeydown);

  }
};

export {getMessageElement, showErrorMessage};

