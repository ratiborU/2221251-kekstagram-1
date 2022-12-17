import {isEscapeKey} from './util.js';


const reHashtag = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const loadButton = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');


const onFocusPreventClose = function (evt) {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};


const clearForm = function () {
  loadButton.value = '';
  hashtagField.value = '';
  commentField.value = '';
};


const checkCorrectHashtags = function (hashtagString) {
  hashtagString = hashtagString.toLowerCase();
  let hashsList = hashtagString.split(' ');
  if (hashtagString.length == 0) {
    return true;
  }
  if (hashsList.length > 5) {
    return false;
  }
  let isValiable = hashsList.every((item) => reHashtag.test(item));
  let isUniauenessHashtags = checkUniauenessHashtags(hashsList);

  return isValiable && isUniauenessHashtags;
};


const checkUniauenessHashtags = function (hashsList) {
  for (let i = 0; i < hashsList.length - 1; i++) {
    for (let j = i + 1; j < hashsList.length; j++) {
      if (hashsList[i] === hashsList[j]) {
        return false;
      }
    }
  }
  return true;
};


export {onFocusPreventClose, checkCorrectHashtags, clearForm};