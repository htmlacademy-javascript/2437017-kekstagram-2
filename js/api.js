import {formStatus, route} from './data.js';

const getData = async () => {
  const response = await fetch(`${route.BASE_URL}${route.GET}`);

  if (!response.ok) {
    throw new Error(`Ошибка HTTP: ${response.status}`);
  }

  return response.json();
};


//отправить данные
const sendData = (onSuccess, onFail, body) => {
  fetch (`${route.BASE_URL}${route.SEND}`,
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
