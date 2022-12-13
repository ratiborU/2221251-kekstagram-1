const getData = (onSuccess, onFail) => {
  fetch('https://26.javascript.pages.academy/kekstagram/data', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((posts) => {
      onSuccess(posts);
    })
    .catch(() => {
      onFail('Не удалось загрузить изображения, попробуйте перезагрузить страницу');
    });
};


const sendData = (onSuccess, onFail, body) => {
  fetch('https://26.javascript.pages.academy/kekstagram ', {
    method: 'POST',
    body
  })
    .then((response) => response.json())
    .then((posts) => {
      onSuccess(posts);
    })
    .catch((message) => {
      onFail(message);
    });
};


export {sendData, getData};