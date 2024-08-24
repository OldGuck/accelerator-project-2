import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const desktop = window.matchMedia('(min-width: 1440px)');

if (!desktop.matches) {
  new Swiper('.gallery__swiper-wrapper', {
    modules: [Navigation],

    navigation: {
      prevEl: '.gallery__button--prev',
      nextEl: '.gallery__button--next'
    },
    simulateTouch: true,
    touchRatio: 1,

    loop: true,
    slidesPerGroup: 1,
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
