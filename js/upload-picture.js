const PICTURE_EXTENSION = ['png', 'jpeg', 'jpg', 'gif'];

const picturePreview = document.querySelector('.img-upload__preview').querySelector('img');
const effectsPreviews = document.querySelectorAll('.effects__preview');

const uploadUserPicture = (pictureFile) => {
  const matches = PICTURE_EXTENSION.some((extension) => pictureFile.name.toLowerCase().endsWith(extension));

  if (matches) {
    const pictureUrl = URL.createObjectURL(pictureFile);
    picturePreview.src = pictureUrl;
    effectsPreviews.forEach((effect) => {
      effect.style.backgroundImage = `url(${pictureUrl})`;
    });
  }
};

export{uploadUserPicture};