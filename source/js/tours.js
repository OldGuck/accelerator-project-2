import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

new Swiper('.tours__swiper-wrapper', {
  modules: [Navigation],

  navigation: {
    prevEl: '.tours__button--prev',
    nextEl: '.tours__button--next'
  },

  slidesPerView: 1,
  spaceBetween: 18,
  // simulateTouch: false,
  touchRatio: 0.5,

  autoHeight: true,

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
