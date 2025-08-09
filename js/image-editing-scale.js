import { uploadForm } from './hashtag-validator.js';
import { previewImg } from './image-upload-form.js';

const valueDisplay = uploadForm.querySelector('.scale__control--value');
const buttonSmaller = uploadForm.querySelector('.scale__control--smaller');
const buttonBigger = uploadForm.querySelector('.scale__control--bigger');

const updateImageScale = (value) => {
  previewImg.style.transform = `scale(${value})`;
  valueDisplay.value = `${value * 100}%`; // Отображаем в процентах
};

const reducesScaleImage = () => {
  const currentValue = parseFloat(valueDisplay.value) / 100;
  const newValue = Math.max(currentValue - 0.25, 0.25);
  updateImageScale(newValue);
};

const reducesBiggerImage = () => {
  const currentValue = parseFloat(valueDisplay.value) / 100;
  const newValue = Math.min(currentValue + 0.25, 1);
  updateImageScale(newValue);
};

const initScaleControls = () => {
  buttonSmaller.addEventListener('click', reducesScaleImage);
  buttonBigger.addEventListener('click', reducesBiggerImage);
};

export { initScaleControls, updateImageScale };
