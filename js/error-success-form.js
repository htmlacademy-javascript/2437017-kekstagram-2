import {formStatus} from './data.js';

const getMessageElement = (element) => { //success или error

  const template = document.getElementById(element);
  const cloneTemplate = template.content.cloneNode(true);
  const messageElement = cloneTemplate.firstElementChild;
  document.body.appendChild(messageElement);

  const closeButton = messageElement.querySelector('button');

  const closeMessage = () => {
    messageElement.remove();
    document.removeEventListener('click', handleDocumentClick);
  };

  // обработка Escape
  const onDocumentKeydown = (evt) => {
    if (evt.key === 'Escape' || document.querySelector(`.${formStatus.SUCCESS}`)) {
      messageElement.remove();
      document.removeEventListener('keydown', onDocumentKeydown); // Удаляем обработчик
    }
  };

  function handleDocumentClick(event) {
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

    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keydown', onDocumentKeydown);

    setTimeout(() => {
      closeMessage();// Удаляем только если элемент в DOM
    }, 5000);
  }
};

export {getMessageElement};

