import {renderThumbnails} from './rendering-thumbnails.js';
import {filters} from './data.js';

let originalArray = []; // Экспортируем переменную

const containerFilters = document.querySelector('.img-filters');
const fromFilters = containerFilters.querySelector('.img-filters__form');

// 1. Добавляем функцию debounce
function debounce(callback, timeoutDelay = 300) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

//управления активным классом
const setActiveFilter = (clickedButton) => {
  // Убираем активный класс со всех кнопок
  const allButtons = fromFilters.querySelectorAll('.img-filters__button');
  allButtons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
  // Добавляем активный класс на clickedButton
  clickedButton.classList.add('img-filters__button--active');
};

const showSelectedFilter = (filterId, clickedElement) => {
  setActiveFilter(clickedElement);
  switch(filterId) {
    case filters.DEFAULT: {
      renderThumbnails(originalArray);
      break;
    }
    case filters.RANDOM: {
      const randomArray = [...originalArray].sort(() => Math.random() - 0.5).slice(0, 10);
      renderThumbnails(randomArray);
      break;
    }
    case filters.DISCUSSED: {
      const discussedArray = [...originalArray].sort((a, b) => b.comments.length - a.comments.length);
      renderThumbnails(discussedArray);
      break;
    }
    default:
      console.log('Неизвестный фильтр:', filterId);
  }
};


// 2. Создаем "заторможенную" версию функции
const debouncedShowFilter = debounce(showSelectedFilter, 300);

const onFiltersClick = (evt) => {
  if(evt.target.classList.contains('img-filters__button')) {
    const filterId = evt.target.id;

    debouncedShowFilter(filterId, evt.target);
  }
};

// Функция инициализации фильтров, которая принимает данные
const initFilters = (photos) => {

  if (!photos || photos.length === 0) {
    return; // Прерываем выполнение
  }

  originalArray = photos; // Заполняем наш массив

  // Показываем форму фильтров
  const filtersForm = document.querySelector('.img-filters--inactive');
  filtersForm.style.opacity = '1';

  // Добавляем обработчик
  fromFilters.addEventListener('click', onFiltersClick);
};

export {initFilters};
