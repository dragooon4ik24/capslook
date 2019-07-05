'use strict';

function Slider(sliderEl) {
    let sliderItems = sliderEl.querySelectorAll('.capslook-slider__item');
    let carouselControls = sliderEl.querySelectorAll('.slider-carousel__button');
    let carouselItems = sliderEl.querySelectorAll('.slider-carousel__item');
    let countSliderItems = carouselItems.length;
    let nextBtn = sliderEl.querySelector('.slider-carousel__button--next');
    let prevBtn = sliderEl.querySelector('.slider-carousel__button--prev');
    let carouselTape = sliderEl.querySelector('.slider-carousel__list');

    let position = 0;
    let widthCarouselElement = 138;
    let minCountVisibleCarouselElement = 6;

    function hideCarouselControls() {
        if (countSliderItems < minCountVisibleCarouselElement) {
            Array.prototype.forEach.call(carouselControls, (item) => {
                item.style.display = 'none';
            });
        }
    }
    nextBtn.addEventListener('click', ()=> {
        position = Math.max(position - widthCarouselElement, -(carouselItems.length - 5) * widthCarouselElement);
        carouselTape.style.marginLeft = position + 'px';
    });
    prevBtn.addEventListener('click', ()=> {
        position = Math.min(position + widthCarouselElement, 0);
        carouselTape.style.marginLeft = position + 'px';
    });


    Array.prototype.forEach.call(carouselItems, (item, index)=> {
        item.setAttribute('data-index', index);
    });

    carouselTape.addEventListener('click', (evt)=> {
        let target = evt.target;
        while (target.tagName !== 'LI') {
            target = target.parentNode;
        }
        Array.prototype.forEach.call(sliderItems, (item)=> {
            item.style.display = 'none';
        });
        sliderItems[target.dataset.index].style.display = 'block';
    });
    hideCarouselControls();
}

let sliders = document.querySelectorAll('.capslook-slider');
Array.prototype.forEach.call(sliders, (item)=> {
    let slider = new Slider(item);
});
let carousel = document.querySelector('.footer-carousel');
let carouselItems = carousel.querySelectorAll('.footer-carousel__item');
let nextBtn = carousel.querySelector('.footer-carousel__button--next');
let prevBtn = carousel.querySelector('.footer-carousel__button--prev');
let carouselTape = carousel.querySelector('.footer-carousel__list');

let position = 0;
let widthCarouselElement = 218;
nextBtn.addEventListener('click', ()=> {
    position = Math.max(position - widthCarouselElement, -(carouselItems.length - 4) * widthCarouselElement);
    carouselTape.style.marginLeft = position + 'px';
});
prevBtn.addEventListener('click', ()=> {
    position = Math.min(position + widthCarouselElement, 0);
    carouselTape.style.marginLeft = position + 'px';
});
