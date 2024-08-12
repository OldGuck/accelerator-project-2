import Swiper from './vendor/swiper-bundle';

const desktop = window.matchMedia('(min-width: 1440px)');

if (desktop.matches) {
  new Swiper('.advantages__swiper-wrapper', {
    navigation: {
      prevEl: '.advantages__button--prev',
      nextEl: '.advantages__button--next'
    },
    loop: true,
    simulateTouch: true,
    touchRatio: 1,

    slidesPerView: 3.5,
    spaceBetween: 30,

    // за раз продистываем 2 слайда
    slidesPerGroup: 1,

    centeredSlides: true,

    initialSlide: 2,
  });
}
