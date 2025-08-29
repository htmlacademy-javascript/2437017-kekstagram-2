import { renderThumbnails } from './rendering-thumbnails.js';
import { config, filters } from './data.js';
import { debounce } from './util.js';

let originalArray = [];

const containerFilters = document.querySelector('.img-filters');
const fromFilters = containerFilters.querySelector('.img-filters__form');

//управления активным классом
const setActiveFilter = (clickedButton) => {
  const activeClass = 'img-filters__button--active';
  // Убираем активный класс со всех кнопок
  const allButtons = fromFilters.querySelectorAll('.img-filters__button');
  allButtons.forEach((button) => {
    button.classList.remove(activeClass);
  });
  // Добавляем активный класс на clickedButton
  clickedButton.classList.add(activeClass);
};

const showSelectedFilter = (filterId, clickedElement) => {
  setActiveFilter(clickedElement);
  switch(filterId) {
    case filters.RANDOM: {
      const randomArray = [...originalArray].sort(() => Math.random() - 0.5).slice(0, config.NUMBER_RANDOM_PHOTOS);
      renderThumbnails(randomArray);
      break;
    }
    case filters.DISCUSSED: {
      const discussedArray = [...originalArray].sort((a, b) => b.comments.length - a.comments.length);
      renderThumbnails(discussedArray);
      break;
    }
    default:
      renderThumbnails(originalArray);
  }
};


// 2. Создаем "заторможенную" версию функции
const debouncedShowFilter = debounce(showSelectedFilter, 500);

const onFiltersClick = (evt) => {
  if(evt.target.classList.contains('img-filters__button')) {
    const filterId = evt.target.id;

    debouncedShowFilter(filterId, evt.target);
  }
};

// 1. инициализации фильтров, которая принимает данные
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
