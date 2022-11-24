const scaleValue = document.querySelector('.scale__control--value');
const form = document.querySelector('.img-upload__scale');
const image = document.querySelector('.img-upload__preview img');
const imageForm = document.querySelector('.img-upload__input');
const slider = document.querySelector('.effect-level__slider');
const sliderWrapper = document.querySelector('.effect-level');
const effectsList = document.querySelector('.effects__list');
const effectValue = document.querySelector('.effect-level__value');
const defaultPhotoSrc = 'img/upload-default-image.jpg';

const PERCENT_STEP = 25;
sliderWrapper.classList.add('hidden');

const effects = {
    chrome: {
        filter: 'grayscale',
        units: '',
        updateOptions: {
            range: {
                min: 0,
                max: 1
            },
            start: 1,
            step: 0.1
        }
    },
    sepia: {
        filter: 'sepia',
        units: '',
        updateOptions: {
            range: {
                min: 0,
                max: 1
            },
            start: 1,
            step: 0.1
        }
    },
    marvin: {
        filter: 'invert',
        units: '%',
        updateOptions: {
            range: {
                min: 0,
                max: 100
            },
            start: 100,
            step: 1
        }
    },
    phobos: {
        filter: 'blur',
        units: 'px',
        updateOptions: {
            range: {
                min: 0,
                max: 3
            },
            start: 3,
            step: 0.1
        }
    },
    heat: {
        filter: 'brightness',
        units: '',
        updateOptions: {
            range: {
                min: 0,
                max: 3
            },
            start: 3,
            step: 0.1
        }
    },
}


const initEffects = function() {
    noUiSlider.create(slider, {
        range: {
            min: 0,
            max: 1,
        },
        start: 1,
        step: 0.1,
        connect: 'lower',
        format: {
            to: (value) => {
                if (Number.isInteger(value)) {
                    return value;
                }
                return value.toFixed(1);
            },
            from: (value) => parseFloat(value),
        },
    });
};


const onRadioButtonClick = function(evt) {
    let nameEffect = evt.target.value;

    if (nameEffect === 'none') {
        sliderWrapper.classList.add('hidden');
        image.removeAttribute('class');
        image.style.filter = '';
    } else {
        sliderWrapper.classList.remove('hidden');
        slider.noUiSlider.updateOptions(effects[nameEffect].updateOptions);

        image.removeAttribute('class');
        image.classList.add(`effects__preview--${nameEffect}`);

        slider.noUiSlider.on('update', (...rest) => {
            effectValue.value = slider.noUiSlider.get();
            image.style.filter = `${effects[nameEffect].filter}(${effectValue.value}${effects[nameEffect].units})`;
        });    
    }    
};


const parsePercent = function(percent) {
    return Number(percent.substring(0, percent.length - 1));
};


const changePercent = function(evt) {
    const buttonScale = evt.target;
    let percent = parsePercent(scaleValue.value);

    if (buttonScale.matches('.scale__control--smaller') && percent > PERCENT_STEP) {
        scaleValue.value = `${percent - PERCENT_STEP}%`;
    }

    if (buttonScale.matches('.scale__control--bigger') && percent < 100) {
        scaleValue.value = `${percent + PERCENT_STEP}%`;
    }

    percent = parsePercent(scaleValue.value);
    image.style.transform = `scale(${percent / 100})`;
};


const onImageLoad = function(evt) {
    console.log(imageForm.value);
    let fileReader = new FileReader();
    fileReader.onload = function() {
        image.src = fileReader.result;
    };

    fileReader.readAsDataURL(evt.target.files[0]);
};


const resetPhotoParametrs = function() {
    effectValue.value = '';
    sliderWrapper.classList.add('hidden');
    image.removeAttribute('class');
    image.src = defaultPhotoSrc;
    image.style.filter = '';
};


initEffects();
form.addEventListener('click', changePercent);
imageForm.addEventListener('change', onImageLoad);
effectsList.addEventListener('change', onRadioButtonClick);


export {resetPhotoParametrs};
