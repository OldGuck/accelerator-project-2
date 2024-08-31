import Swiper from 'swiper';
import 'swiper/css';

const desktop = window.matchMedia('(min-width: 1440px)');

if (!desktop.matches) {
  new Swiper('.gallery__swiper-wrapper', {
    navigation: {
      prevEl: '.gallery__button--prev',
      nextEl: '.gallery__button--next'
    },

    touchRatio: 0.5,
    loop: true,

    slidesPerView: 2,
    spaceBetween: 5,

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 5
      }
    }
  });
}
