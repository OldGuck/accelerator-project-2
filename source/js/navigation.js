const navigationMenu = document.querySelector('.header__navigation');
const navigationItems = document.querySelectorAll('.header__navigation-item');
const navigationToogle = document.querySelector('.header__toggle-button');
const toogleHiddenText = document.querySelector('.header__toggle-text');

const hiddenText = {
  OPEN_TEXT:  'Открыть меню навигации.',
  CLOSE_TEXT: 'Закрыть меню навигации.',
};

const manageNavigation = () => {
  navigationToogle.classList.toggle('header__toggle-button--closed');
  navigationMenu.classList.toggle('header__navigation--closed');

  document.body.style.overflow = 'visible';
  toogleHiddenText.textContent = hiddenText.OPEN_TEXT;
};

navigationToogle.addEventListener('click', () => {
  manageNavigation();

  // opened
  if (! navigationToogle.classList.contains('header__toggle-button--closed')) {
    document.body.style.overflow = 'hidden';
    toogleHiddenText.textContent = hiddenText.CLOSE_TEXT;
  }
});

// if (getComputedStyle(navigationToogle).display !== 'none') {

navigationItems.forEach((item) => {
  item.addEventListener('click', () => {
    manageNavigation();
  });
});
