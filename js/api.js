import {formStatus} from './data.js';
//получить данные
async function getData() {
  const response = await fetch('https://31.javascript.htmlacademy.pro/kekstagram/data');

  if (!response.ok) {
    throw new Error(`Ошибка сервера: ${response.status}`);
  }

  return response.json();
}


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
        onFail(formStatus.SUCCESS);
      } else {
        onFail(formStatus.ERROR);
      }
    })
    .catch(() => {
      onFail(formStatus.ERROR);
    });
};

export{getData, sendData};
