function getRandomNumberBetween(a, b) {
	return Math.floor (Math.random () * (Math.abs(a - b) + 1)) + Math.min(a, b);
}


function checkStringLength(string, maxLength) {
	return string.length <= maxLength;
}


function getRandomArrayElement(array) {
	return array[getRandomNumberBetween(0, array.length - 1)];
}

export {getRandomNumberBetween, checkStringLength, getRandomArrayElement};
