import Swiper from 'swiper/bundle';
import 'swiper/css';

const renderPagination = (index, className) => `<button class="${className}" type="button"><span class="visually-hidden">Перейти к слайду ${index + 1}</span></button>`;

new Swiper('.hero__swiper-wrapper', {
  pagination: {
    el: '.hero__pagination',
    bulletClass: 'hero__pagination-button',
    bulletActiveClass: 'hero__pagination-button--current',
    renderBullet: renderPagination,
    clickable: true,
  },

  simulateTouch: false,
  touchRatio: 0.5,
  loop: true,

  slidesPerView: 1,
  spaceBetween: 0
});
