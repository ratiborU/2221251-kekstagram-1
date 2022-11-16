import {isEscapeKey} from './util.js';


const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const image = bigPicture.querySelector('.big-picture__img img');
const likes = bigPicture.querySelector('span.likes-count');
const commentsCountText = bigPicture.querySelector('.social__comment-count');
const commentsLoadButton = bigPicture.querySelector('.comments-loader');
const description = bigPicture.querySelector('p.social__caption');
const commentsList = bigPicture.querySelector('.social__comments');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentTemplate = bigPicture.querySelector('.social__comment');
let fillComments = function() {};


const openPicture = function(post) {
    renderBigPicture(post);
    commentsLoadEvents(post);
};


const renderBigPicture = function(post) {
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');

    image.src = post.url;
    likes.textContent = post.likes;
    description.textContent = post.description;
    commentsList.innerHTML = '';
};


const commentsLoadEvents = function(post) {
    commentsLoadButton.removeEventListener('click', fillComments);
    fillComments = addComments(post.comments);
    fillComments();
    closeBigPicture();
    commentsLoadButton.addEventListener('click', fillComments);
};


const closeBigPicture = function() {
    closeButton.addEventListener('click', closeOnButton);
    document.addEventListener('keydown', closeOnEsc);
};


const closeOnEsc = function(evt) {
    if (isEscapeKey(evt)) {
        commentsCount = 0;
        bigPicture.classList.add('hidden');
        body.classList.remove('modal-open');
        closeButton.removeEventListener('click', closeOnButton);
        document.removeEventListener('keydown', closeOnEsc);    
    }
};


const closeOnButton = function(fillomments) {
    commentsCount = 0;
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    closeButton.removeEventListener('click', closeOnButton);
    document.removeEventListener('keydown', closeOnEsc);    
};


let commentsCount = 0;
const addComments = function(comments) {
    return function() {
        comments.slice(commentsCount, 5 + commentsCount).forEach(comment => {
            commentsList.append(createComment(comment));
            commentsCount++;
        });
        commentsCountText.innerHTML = `${commentsCount} из <span class="comments-count">${comments.length}</span> комментариев`;
        
        if (comments.length == commentsCount) {
            commentsLoadButton.classList.add('hidden');
        } else {
            commentsLoadButton.classList.remove('hidden');
        }
    }
};


const createComment = function(comment) {
    let thisComment = commentTemplate.cloneNode(true);
    let image = thisComment.querySelector('.social__picture');
    image.src = comment.avatar;
    image.alt = comment.name;
    thisComment.querySelector('.social__text').textContent = comment.message;
    return thisComment;
};


export {openPicture};