import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

new Swiper('.reviews__swiper-wrapper', {
  modules: [Navigation],

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
