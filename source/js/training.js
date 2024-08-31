import Swiper from 'swiper';
import 'swiper/css';

new Swiper('.instructors__swiper-wrapper', {
  navigation: {
    prevEl: '.instructors__button--prev',
    nextEl: '.instructors__button--next'
  },

  simulateTouch: false,
  touchRatio: 0.5,

  slidesPerView: 1,
  spaceBetween: 20,
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
