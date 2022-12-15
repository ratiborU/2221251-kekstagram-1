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
  }, 5000);
}


function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}


function throttle (callback, delayBetweenFrames) {
  let lastTime = 0;

  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}


const getSuffeledList = (list) => {
  for(let firstIndex = list.length - 1; firstIndex > 0; firstIndex--) {
    const randomIndex = Math.floor(Math.random() * (firstIndex + 1));
    [list[firstIndex], list[randomIndex]] = [list[randomIndex], list[firstIndex]];
  }

  return list;
};


export {getRandomNumberBetween, checkStringLength, getRandomArrayElement, isEscapeKey, showUnloadingErrorMessage, debounce, throttle, getSuffeledList};
