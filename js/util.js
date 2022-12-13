const getRandomNumberBetween = function (a, b) {
	return Math.floor (Math.random () * (Math.abs(a - b) + 1)) + Math.min(a, b);
}


const checkStringLength = function (string, maxLength) {
	return string.length <= maxLength;
}


const getRandomArrayElement = function (array) {
	return array[getRandomNumberBetween(0, array.length - 1)];
}


const isEscapeKey = function (evt) {
	return evt.key === 'Escape';
};


const showUnloadingErrorMessage = function (message) {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}


export {getRandomNumberBetween, checkStringLength, getRandomArrayElement, isEscapeKey, showUnloadingErrorMessage};
