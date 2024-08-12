import Swiper from './vendor/swiper-bundle';

new Swiper('.tours__swiper-wrapper', {
  navigation: {
    prevEl: '.tours__button--prev',
    nextEl: '.tours__button--next'
  },

  slidesPerView: 1,
  spaceBetween: 18,
  simulateTouch: false,
  touchRatio: 0.5,

  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
