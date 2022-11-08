import {getRandomNumberBetween, checkStringLength, getRandomArrayElement} from "util.js";

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


function getRandomMessage() {
	if (getRandomNumberBetween(0, 1) == 0) {
		return getRandomArrayElement(MESSAGES);
	} else {
		return getRandomArrayElement(MESSAGES) + ' ' + getRandomArrayElement(MESSAGES);
	}
}


function createCommentsArray(commentsCount) {
	let comments = [];
	let idComments = 0;

	for (let i = 0; i < commentsCount; i++){
		idComments++;
		comments.push({
			id: idComments,
			avatar: `img/avatar-${getRandomNumberBetween(1, 6)}.svg`,
			message: getRandomMessage(),
			name: getRandomArrayElement(USER_NAMES),
		})
	}

	return comments;
}


const createPost = (idNumber) => {
	return {
		id: idNumber,
		url: `photos/${idNumber}.jpg`,
		description: "пост",
		likes: getRandomNumberBetween(15, 200),
		comments: createCommentsArray(getRandomNumberBetween(1, 4))
	};
};


const createPostList = (postsCount) => {
	let posts = [];
	for (let i = 1; i <= postsCount; i++) {
		posts.push(createPost(i));
	}

	return posts;
};

export {createPostList};
