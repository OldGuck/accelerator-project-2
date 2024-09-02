import Swiper from 'swiper';
import 'swiper/css';

const advantagesList = document.querySelector('.advantages__list');
const advantagesItems = document.querySelectorAll('.advantages__item');

const desktop = window.matchMedia('(min-width: 1440px)');

const newItems = [];

if (desktop.matches) {
  advantagesItems.forEach((item) => {
    const newItem = item.cloneNode(true);
    newItems.push(newItem);
  });

  newItems.forEach((item) => {
    advantagesList.appendChild(item);
  });

  new Swiper('.advantages__swiper-wrapper', {
    navigation: {
      prevEl: '.advantages__button--prev',
      nextEl: '.advantages__button--next'
    },

    simulateTouch: false,
    touchRatio: 0.5,
    loop: true,

    slidesPerView: 'auto',
    spaceBetween: 30,

    slidesPerGroup: 2,

    centeredSlides: true,
    initialSlide: 2
  });
}
