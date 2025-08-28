import { previewImg } from './image-upload-form.js';
import { effects } from './data.js';

const containerSlider = document.querySelector('.img-upload__effect-level');
const sliderElement = containerSlider.querySelector('.effect-level__slider');
const valueElement = containerSlider.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects__list');

let currentEffect = 'none';

//Очистка всех классов эффектов с изображения
const removeAllEffectClasses = () => {
  previewImg.classList.remove(
    'effects__preview--chrome',
    'effects__preview--sepia',
    'effects__preview--marvin',
    'effects__preview--phobos',
    'effects__preview--heat'
  );
};

//Инициализация слайдера
const addSlider = () => {
  if (!sliderElement.noUiSlider) {
    noUiSlider.create(sliderElement, {
      range: {min: 0, max: 1,},
      start: 1,
      step: 0.1,
      connect: 'lower',
    });

    sliderElement.noUiSlider.on('update', (value) => {
      const numericValue = Number(value);
      valueElement.value = numericValue;
      if (currentEffect !== 'none') {
        const effect = effects[currentEffect]; // текущий выбранный объект
        previewImg.style.filter = `${effect.filter}(${numericValue}${effect.unit})`;//invert(50%)
      }else {
        previewImg.style.filter = 'none';
      }
    });
  }
};

//Удаление слайдера
const deleteSlider = () => {
  if (sliderElement.noUiSlider) {
    sliderElement.noUiSlider.destroy();
  }
};

//Сброс значений элементов
const resetsValuesElements = () => {
  containerSlider.style.display = 'none';
  previewImg.style.filter = 'none';
  valueElement.value = '';
};

//Применение выбранного фильтра
const tracksSelectedFilter = (value) => {
  currentEffect = value;
  if (value !== 'none') {
    addSlider();
    previewImg.classList.add(`effects__preview--${value}`);
    containerSlider.style.display = 'block';
    sliderElement.noUiSlider.updateOptions ({
      range: {
        min: effects[value].min,
        max: effects[value].max,
      },
      start: effects[value].max,
      step: effects[value].step,
    });
  }else {
    resetsValuesElements();
  }
};

//Обработчик выбранного эффекта,
const tracksSelectedEffect = () => {
  effectsList.addEventListener('change', (evt) => {
    removeAllEffectClasses();
    const selectedEffects = evt.target.value;
    tracksSelectedFilter(selectedEffects);
  });
};

export { addSlider, deleteSlider, tracksSelectedEffect, resetsValuesElements, effectsList };
