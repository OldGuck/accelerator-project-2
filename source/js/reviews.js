import Swiper from './vendor/swiper-bundle';

new Swiper('.reviews__swiper-wrapper', {
  navigation: {
    prevEl: '.reviews__button--prev',
    nextEl: '.reviews__button--next'
  },
  simulateTouch: true,
  touchRatio: 1,

  slidesPerView: 1,
  spaceBetween: 30,

  breakpoints: {
    768: {
      slidesPerView: "auto",
      spaceBetween: 30
    },
    1440: {
      slidesPerView: "auto",
      spaceBetween: 120
    }
  }
});
