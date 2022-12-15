import {renderPosts, getPostList} from "./thumbnail.js";
import {getSuffeledList, debounce} from "./util.js";


const pictures = document.querySelector('.pictures');

const defaultButton = document.querySelector('#filter-default');
const randomButton = document.querySelector('#filter-random');
const discussedButton = document.querySelector('#filter-discussed');
let activeButton = defaultButton;


const renderButton = function (button) {
  return function() {
    activeButton.classList.remove('img-filters__button--active');
    button.classList.add('img-filters__button--active');
    activeButton = button;  
  };
};

const removePictures = function () {
  const currentPictures = pictures.querySelectorAll('.picture');
  currentPictures.forEach(function(picture) {
    picture.remove();
  });
};


const setDefaultPosts = function () {
  removePictures();
  const postList = getPostList();
  renderPosts(postList);
};


const setRandomPosts = function () {
  removePictures();
  const postList = getPostList();
  const shuffledPostList = getSuffeledList(postList.slice()).slice(0, 10)
  renderPosts(shuffledPostList);
};


const setDiscussedPosts = function () {
  removePictures();
  const postList = getPostList();
  const discussedPostList = postList.slice().sort((a, b) => b.comments.length - a.comments.length)
  renderPosts(discussedPostList);
};


defaultButton.addEventListener('click', debounce(setDefaultPosts));
randomButton.addEventListener('click', debounce(setRandomPosts));
discussedButton.addEventListener('click', debounce(setDiscussedPosts));

defaultButton.addEventListener('click', renderButton(defaultButton));
randomButton.addEventListener('click', renderButton(randomButton));
discussedButton.addEventListener('click', renderButton(discussedButton));
