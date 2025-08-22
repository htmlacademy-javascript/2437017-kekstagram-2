import {containerPictures} from './rendering-thumbnails.js';
import {config} from './data.js';

const bigPicture = document.querySelector('.big-picture');
const containerComments = bigPicture.querySelector('.social__comments');
const commentTemplate = bigPicture.querySelector('.social__comment');
const buttonUpload = bigPicture.querySelector('.social__comments-loader');
const buttonClose = bigPicture.querySelector('.big-picture__cancel');
const shownCommentsCount = bigPicture.querySelector('.social__comment-shown-count');
const totalCommentsCount = bigPicture.querySelector('.social__comment-total-count');

let photosArray = null;
let currentComments = [];
let commentsShown = 0;

// Создает DOM-элемент одного комментария
const createSingleComment = ({avatar, message, name}) => { // создание комментария
  const item = commentTemplate.cloneNode(true);
  const imageAvatar = item.querySelector('.social__picture');
  imageAvatar.src = avatar;
  imageAvatar.alt = name;
  item.querySelector('.social__text').textContent = message;
  return item;
};

//3.Очищает список комментариев
const clearComments = () => {
  commentsShown = 0;
  containerComments.innerHTML = '';
};

//4.Отображает порцию комментариев:
const renderComments = (comments) => {
  const commentFragment = document.createDocumentFragment();
  const portion = comments.slice(commentsShown, commentsShown + config.COMMENTS_PER_PORTION);

  portion.forEach((comment) => {
    commentFragment.append(createSingleComment(comment));
  });

  containerComments.append(commentFragment);
  commentsShown += portion.length; //увеличивает на длину массива
  shownCommentsCount.textContent = commentsShown;

  if (commentsShown >= comments.length) {
    buttonUpload.classList.add('hidden');
  }else {
    buttonUpload.classList.remove('hidden');
  }
};

//5. Обработчик кнопки "Загрузить еще"
const onUploadButtonClick = () => renderComments(currentComments);

//6. Закрывает полноэкранное просмотр фото
const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  buttonUpload.removeEventListener('click', onUploadButtonClick); // Удаляем слушатель
  //«Перестань вызывать эту конкретную функцию (closeBigPicture) при клике на эту кнопку».
  buttonClose.removeEventListener('click', closeBigPicture); // Удаляем слушатель
  document.removeEventListener('keydown', onDocumentKeydown);
};

//7.Обработчик клавиатуры - Esc (Ф-ия всплытия)
function onDocumentKeydown (evt) {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
}

//2.Открывает полноэкранный просмотр фото
const openBigPicture = (idPicture) => {
  const currentPhoto = photosArray.find((photo) => photo.id === Number(idPicture)); // сравниваем полученое id с массивом

  bigPicture.querySelector('.big-picture__img img').src = currentPhoto.url;
  bigPicture.querySelector('.likes-count').textContent = currentPhoto.likes;
  bigPicture.querySelector('.social__caption').textContent = currentPhoto.description;
  totalCommentsCount.textContent = currentPhoto.comments.length;

  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  currentComments = currentPhoto.comments; // сохраняем все коменты в переменную
  clearComments();

  renderComments(currentPhoto.comments); // Отрисовка комментариев для текущей фотографии

  buttonUpload.addEventListener('click', onUploadButtonClick);
  // Закрытие по клику на крестик
  buttonClose.addEventListener('click', closeBigPicture);
  // Закрытие по Esc
  document.addEventListener('keydown', onDocumentKeydown);
};

// 1.Открытие модалки при клике на миниатюру
const setupEventListeners = () => {
  containerPictures.addEventListener('click', (evt) => {
    const currentPicture = evt.target.closest('.picture');// получаем id выбраной picture
    if (currentPicture){
      evt.preventDefault();
      openBigPicture(currentPicture.dataset.id); // передаем значение id
    }
  });
};

const initBigPicture = (photos) => {
  photosArray = photos; // Сохраняем переданные данные
  setupEventListeners();
};

export{ initBigPicture };
