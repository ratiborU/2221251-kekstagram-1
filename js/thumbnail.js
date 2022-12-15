import {openPicture} from "./big-picture.js";
	

const photo = document.querySelector('#picture').content;
const templatePost = photo.querySelector('.picture').cloneNode(true);
const filterButtons = document.querySelector('.img-filters');
const pictures = document.querySelector('.pictures');
let postList;


const renderPosts = function(posts) {
	pictures.append(createPosts(posts));
  filterButtons.classList.remove('img-filters--inactive');
  if (!postList) {
    postList = posts;
  }
};


const getPostList = function() {
  return postList;
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
  //newPhoto.classList.add('picture');

	return newPhoto;
};

const getSettedUpPhoto = function(post) {
	let newPhoto = createPost(post);
	newPhoto.addEventListener('click', function() {
		openPicture(post);
	});
	return newPhoto;
};


export {renderPosts, getPostList};
