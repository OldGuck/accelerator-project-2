import Swiper from 'swiper';
import 'swiper/css';

new Swiper('.reviews__swiper-wrapper', {
  navigation: {
    prevEl: '.reviews__button--prev',
    nextEl: '.reviews__button--next'
  },

  simulateTouch: false,
  touchRatio: 0.5,

  slidesPerView: 1,
  spaceBetween: 30,

  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 120
    }
  }
});
