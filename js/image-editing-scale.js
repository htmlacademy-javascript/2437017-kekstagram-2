import { uploadForm } from './hashtag-validator.js';
import { previewImg } from './image-upload-form.js';
import { scale } from './data.js';

const valueDisplay = uploadForm.querySelector('.scale__control--value');
const buttonSmaller = uploadForm.querySelector('.scale__control--smaller');
const buttonBigger = uploadForm.querySelector('.scale__control--bigger');

const updateImageScale = (value) => {
  previewImg.style.transform = `scale(${value})`;
  valueDisplay.value = `${value * scale.DISPLAY_MULTIPLIER}%`; // Отображаем в процентах
};

const reducesScaleImage = () => {
  const currentValue = parseFloat(valueDisplay.value) / scale.DISPLAY_MULTIPLIER;
  const newValue = Math.max(currentValue - scale.STEP, scale.MIN);
  updateImageScale(newValue);
};

const reducesBiggerImage = () => {
  const currentValue = parseFloat(valueDisplay.value) / scale.DISPLAY_MULTIPLIER;
  const newValue = Math.min(currentValue + scale.STEP, scale.MAX);
  updateImageScale(newValue);
};

const initScaleControls = () => {
  buttonSmaller.addEventListener('click', reducesScaleImage);
  buttonBigger.addEventListener('click', reducesBiggerImage);
};

export { initScaleControls, updateImageScale };
