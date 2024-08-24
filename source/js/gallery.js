import Swiper from './vendor/swiper-bundle';

new Swiper('.gallery__swiper-wrapper', {
  navigation: {
    prevEl: '.gallery__button--prev',
    nextEl: '.gallery__button--next'
  },
  simulateTouch: true,
  touchRatio: 1,

  slidesPerView: 2,
  spaceBetween: 5,
  slidesPerGroup: 1,
  // initialSlide: 1,


  // breakpoints: {
  //   768: {
  //     slidesPerView: "auto",
  //     spaceBetween: 30
  //   },
  //   1440: {
  //     slidesPerView: "auto",
  //     spaceBetween: 120
  //   }
  // }
});
