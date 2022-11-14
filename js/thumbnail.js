import {setBigPicture, createComment, createComments} from "./big-picture.js";
import {isEscapeKey} from './util.js';


let createPosts = function(posts, templatePost) {
    let postsListFragment = document.createDocumentFragment();
    let bigPicture = document.querySelector('.big-picture');
    closeBigPictureButton(bigPicture);

    for (let post of posts) {
        var newPhoto = templatePost.cloneNode(true);
        let pictureImg = newPhoto.querySelector('.picture__img');
        let pictureComments = newPhoto.querySelector('.picture__comments');
        let pictureLikes = newPhoto.querySelector('.picture__likes');

        pictureImg.src = post.url;
        pictureComments.textContent = post.comments.length;
        pictureLikes.textContent = post.likes;
        let setImg = setBigPicture(newPhoto, post);

        newPhoto.addEventListener('click', function() {
            setImg();
        });

        postsListFragment.append(newPhoto);
    }

    return postsListFragment;
};


let closeBigPictureButton = function(bigPicture) {
    let closeButton = bigPicture.querySelector('.big-picture__cancel');
    closeButton.addEventListener('click', function() {
        bigPicture.classList.add('hidden');
    });

    document.addEventListener('keydown', function (evt) {
        if (isEscapeKey(evt)) {
            bigPicture.classList.add('hidden');
        }
    });
};


let photo = document.querySelector('#picture').content;
let templatePhoto = photo.querySelector('.picture').cloneNode(true);

export {createPosts, templatePhoto};
