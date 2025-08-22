import {initUploadForm} from './image-upload-form.js';
// получить данные
const getData = (onSuccess) => {
  fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
      initUploadForm();
    });
};

//отправить данные
const sendData = (onSuccess, onFail, body) => {
  fetch ('https://31.javascript.htmlacademy.pro/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        onFail('success');
      } else {
        onFail('error');
      }
    })
    .catch(() => {
      onFail('error');
    });
};

export{getData, sendData};
