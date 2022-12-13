import {openPicture} from "./big-picture.js";
	

const photo = document.querySelector('#picture').content;
const templatePost = photo.querySelector('.picture').cloneNode(true);


const renderPosts = function(posts) {
	let pictures = document.querySelector('.pictures');
	pictures.append(createPosts(posts));
};


const createPosts = function(posts) {
	let postsListFragment = document.createDocumentFragment();
	for (let post of posts) {
		postsListFragment.append(getSettedUpPhoto(post));
	}

	return postsListFragment;
};


const createPost = function(post) {
	var newPhoto = templatePost.cloneNode(true);
	newPhoto.querySelector('.picture__img').src = post.url;
	newPhoto.querySelector('.picture__comments').textContent = post.comments.length;
	newPhoto.querySelector('.picture__likes').textContent = post.likes;

	return newPhoto;
};

const getSettedUpPhoto = function(post) {
	let newPhoto = createPost(post);
	newPhoto.addEventListener('click', function() {
		openPicture(post);
	});
	return newPhoto;
};


export {renderPosts};
