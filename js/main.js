function getRandomNumberBetween(a, b) {
	return Math.floor (Math.random () * (Math.abs(a - b) + 1)) + Math.min(a, b);
}

function checkStringLength(string, maxLength) {
	return string.length <= maxLength;
}

function getShuffledArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function getRandomArrayElement(array) {
	return array[getRandomNumberBetween(0, array.length - 1)];
}

function getRandomMessage() {
	if (getRandomNumberBetween(0, 1) == 0) {
		return getRandomArrayElement(MESSAGES);
	} else {
		getRandomArrayElement(MESSAGES) + ' ' = getRandomArrayElement(MESSAGES);
	}
}

const USER_NAMES = [
	"Александр",
	"Максим",
	"Михаил",
	"Иван",
	"Артем",
	"Дмитрий",
	"София",
	"Анна",
	"Мария",
	"Алиса",
];

const MESSAGES = [
	"Всё отлично!",
	"В целом всё неплохо. Но не всё.",
	"Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
	"Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
	"Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
	"Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
];

let id_array = getShuffledArray([...Array(25).keys()]);
let comments_id_array = getShuffledArray([...Array(25).keys()]);

const createPost = () => {
	return {
		id: id_array[id_array.length - 1],
		url: `photos/${id_array.pop()}.jpg`,
		description: "пост",
		likes: getRandomNumberBetween(15, 200),
		comments: {
			id: comments_id_array.pop(),
			avatar: `img/avatar-${getRandomNumberBetween(1, 6)}.svg`,
			message: getRandomMessage(),
			name: getRandomArrayElement(USER_NAMES),
		}
	};
};
