const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessage = successTemplate.cloneNode(true);
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessage = errorTemplate.cloneNode(true);


successMessage.classList.add('hidden');
errorMessage.classList.add('hidden');
document.body.append(errorMessage);
document.body.append(successMessage);


const onSuccessClick = function () {
  successMessage.classList.add('hidden')
};


const onErrorClick = function () {
  errorMessage.classList.add('hidden')
};


const showSuccessMessage = function () {
  successMessage.classList.remove('hidden');
  successMessage.addEventListener('click', onSuccessClick, {once: true});
};


const showErrorMessage = function () {
  errorMessage.classList.remove('hidden');
  errorMessage.addEventListener('click', onErrorClick, {once: true});
};


export {showSuccessMessage, showErrorMessage};