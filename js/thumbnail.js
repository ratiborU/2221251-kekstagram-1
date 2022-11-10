var createPosts = function(posts, templatePost) {
    var postsListFragment = document.createDocumentFragment();

    for (let post of posts) {
        var newPhoto = templatePost.cloneNode(true);

        var pictureImg = newPhoto.querySelector('.picture__img');
        var pictureComments = newPhoto.querySelector('.picture__comments');
        var pictureLikes = newPhoto.querySelector('.picture__likes');
        pictureImg.src = post.url;
        pictureComments.textContent = post.comments.length;
        pictureLikes.textContent = post.likes;

        postsListFragment.append(newPhoto);
    }

    return postsListFragment;
};


var photo = document.querySelector('#picture').content;
var templatePhoto = photo.querySelector('.picture').cloneNode(true);

export {createPosts, templatePhoto};
