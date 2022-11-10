let setBigPicture = function(photo, post) {
    let bigPicture = document.querySelector('.big-picture');
    let bodyTag = document.querySelector('body');
    let bigPictureImg = bigPicture.querySelector('.big-picture__img img');
    let bigPictureLikes = bigPicture.querySelector('span.likes-count');
    let bigPictureCommentsCount = bigPicture.querySelector('span.comments-count');
    let bigPictureCommentsAllCount = bigPicture.querySelector('.social__comment-count');
    let bigPictureCommentsLoad = bigPicture.querySelector('.comments-loader');
    let bigPictureDescription = bigPicture.querySelector('p.social__caption');
    let bigPictureComments = bigPicture.querySelector('.social__comments');


    return function() {
        bigPicture.classList.remove('hidden');
        bigPictureImg.src = photo.querySelector('.picture__img').src;
        bigPictureLikes.textContent = photo.querySelector('.picture__likes').textContent;
        bigPictureCommentsCount.textContent = photo.querySelector('.picture__comments').textContent;
        bigPictureCommentsAllCount.classList.add('hidden');
        bigPictureCommentsLoad.classList.add('hidden');
        bigPictureDescription.textContent = post.description;
        bigPictureComments.innerHTML = '';
        bigPictureComments.append(createComments(post.comments));
        bodyTag.classList.add('modal-open');
    };
};


let createComment = function(comment) {
    let resultComment = document.createElement('li');
    resultComment.classList.add('social__comment');

    let image = document.createElement('img');
    image.classList.add('social__picture');
    image.src = comment.avatar;
    image.alt = comment.name;
    image.width = 35;
    image.height = 35;

    let commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = comment.message

    resultComment.append(image);
    resultComment.append(commentText);

    return resultComment;
};


let createComments = function(comments) {
    let resultComments = document.createDocumentFragment();
    for (let comment of comments) {
        resultComments.append(createComment(comment));
    }

    return resultComments;
};


export {setBigPicture, createComment, createComments};