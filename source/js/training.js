import Swiper from './vendor/swiper-bundle';

new Swiper('.instructors__swiper-wrapper', {
  navigation: {
    prevEl: '.instructors__button--prev',
    nextEl: '.instructors__button--next'
  },
  simulateTouch: true,
  touchRatio: 0.5,
  spaceBetween: 20,

  slidesPerView: 1,
  initialSlide: 2,

  breakpoints: {
    768: {
      slidesPerView: 3,
      initialSlide: 0
    },
    1440: {
      slidesPerView: 4,
      initialSlide: 0
    }
  }
});
