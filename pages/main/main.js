import '/src/scss/pages/main.scss';

import {
  initBurgerMenu,
  handleHeaderScroll,
  initAllSpoilers,
  videoHandler,
  scrollButtonToTop,
  swiperClientFeetbackLabel,
  swiperMainLabel,
  swiperOurProjectLabel,
} from '/src/js/modules';

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  handleHeaderScroll();
  initAllSpoilers();
  videoHandler();
  scrollButtonToTop();
  swiperClientFeetbackLabel();
  swiperMainLabel();
  swiperOurProjectLabel();
});
