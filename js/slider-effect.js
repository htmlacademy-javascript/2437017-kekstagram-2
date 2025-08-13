import { previewImg } from './image-upload-form.js';

const containerSlider = document.querySelector('.img-upload__effect-level');
const sliderElement = containerSlider.querySelector('.effect-level__slider');
const valueElement = containerSlider.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects__list');

//Параметры для каждого типа эффекта
const effects = {
  chrome: {filter: 'grayscale', unit: '', min: 0, max: 1, step: 0.1,},
  sepia: {filter: 'sepia', unit: '', min: 0, max: 1, step: 0.1,},
  marvin: {filter: 'invert', unit: '%', min: 0, max: 100, step: 1,},
  phobos: {filter: 'blur', unit: 'px', min: 0, max: 3, step: 0.1,},
  heat: {filter: 'brightness', unit: '', min: 1, max: 3, step: 0.1,},
  none: {filter: null,},
};

//Очистка всех классов эффектов с изображения
const removeAllEffectClasses = () => {
  // Удаляем все классы эффектов
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

//изменение значения слайдера и применение соответствующего эффекта к изображению
const handleEffectIntensityChange = (value) => {
  const selectedEffect = value;
  sliderElement.noUiSlider.on('update', (unencoded) => {
    const numericValue = unencoded[0];
    valueElement.value = numericValue;
    if (selectedEffect !== 'none') {
      const effect = effects[selectedEffect]; // текущий выбранный объект
      previewImg.style.filter = `${effect.filter}(${numericValue}${effect.unit})`;//invert(50%)
    }
  });
};

//Применение выбранного фильтра
const tracksSelectedFilter = (value) => { //value = chrome, sepia, marvin, phobos, heat, none
  if (value !== 'none') {
    handleEffectIntensityChange(value);
    // доб.класс выбранного фильтра
    previewImg.classList.add(`effects__preview--${value}`);
    containerSlider.style.display = 'block';
    // valueElement.style.display = 'block';
    sliderElement.noUiSlider.updateOptions ({
      range: {
        min: effects[value].min,
        max: effects[value].max,
      },
      start: effects[value].max,
      step: effects[value].step,
    });
  }else {
    //скрываем слайдер
    resetsValuesElements();
  }
};

//Обработчик выбранного эффекта,
const tracksSelectedEffect = () => {
  effectsList.addEventListener('change', (evt) => {
    //при каждом выборе удаляем все доб. классы
    removeAllEffectClasses();
    const selectedEffects = evt.target.value;
    tracksSelectedFilter(selectedEffects);
  });
};

export {addSlider, deleteSlider, tracksSelectedEffect, resetsValuesElements, effectsList} ;
