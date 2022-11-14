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

export {getRandomNumberBetween, checkStringLength, getRandomArrayElement, isEscapeKey};
