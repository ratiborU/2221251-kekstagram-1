import {isEscapeKey} from './util.js';
import {resetPhotoParametrs} from "./scale.js";
import {onFocusPreventClose, checkCorrectHashtags} from './form-fuctions.js';

const form = document.querySelector('.img-upload__form');
const loadButton = document.querySelector('#upload-file');
const loadScreen = document.querySelector('.img-upload__overlay');
const closeButton = loadScreen.querySelector('.img-upload__cancel');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');


const onCloseButton = function () {
    closeLoadForm();
};


const onCloseEsc = function (evt) {
    if (isEscapeKey(evt)) { 
        closeLoadForm();
    }
};


const onSubmitButton = function (evt) {
    let isCorrectHashtags = checkCorrectHashtags(hashtagField.value);
    if (!isCorrectHashtags) {
        evt.preventDefault();
    }
};


const openLoadForm = function() {
    loadScreen.classList.remove('hidden');
    document.body.classList.add('modal-open');

    closeButton.addEventListener('click', onCloseButton);
    document.addEventListener('keydown', onCloseEsc);
    form.addEventListener('submit', onSubmitButton);
};


const closeLoadForm = function() {
    loadScreen.classList.add('hidden');
    document.body.classList.remove('modal-open');
    loadButton.value = '';

    closeButton.removeEventListener('click', onCloseButton);
    document.removeEventListener('keydown', onCloseEsc);
    form.removeEventListener('submit', onSubmitButton);

    resetPhotoParametrs();
};


loadButton.addEventListener('click', openLoadForm);
hashtagField.addEventListener('keydown', onFocusPreventClose);
commentField.addEventListener('keydown', onFocusPreventClose);
