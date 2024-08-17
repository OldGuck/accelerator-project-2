import Swiper from './vendor/swiper-bundle';

new Swiper('.hero__swiper-wrapper', {
  pagination: {
    el: '.hero__pagination',
    clickable: true,
  },
  simulateTouch: true,
  touchRatio: 1,
  loop: true,

  slidesPerView: 1,
  spaceBetween: 0,
  // initialSlide: 1,
});
