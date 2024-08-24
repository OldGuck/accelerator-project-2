import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const desktop = window.matchMedia('(min-width: 1440px)');

if (desktop.matches) {
  new Swiper('.advantages__swiper-wrapper', {
    modules: [Navigation],

    navigation: {
      prevEl: '.advantages__button--prev',
      nextEl: '.advantages__button--next'
    },
    loop: true,
    simulateTouch: true,
    touchRatio: 1,

    slidesPerView: "auto",
    spaceBetween: 30,

    slidesPerGroup: 2,

    centeredSlides: true,
    initialSlide: 2,
  });
}
