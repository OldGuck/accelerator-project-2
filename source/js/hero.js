import Swiper from 'swiper';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

new Swiper('.hero__swiper-wrapper', {
  modules: [Pagination],

  pagination: {
    el: '.hero__pagination',
    clickable: true,
  },

  simulateTouch: true,
  touchRatio: 1,
  loop: true,

  slidesPerView: 1,
  spaceBetween: 0,
});
