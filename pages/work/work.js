import '/src/scss/pages/work.scss';

import {
  initBurgerMenu,
  handleHeaderScroll,
  initAllSpoilers,
  scrollButtonToTop,
  swiperOurProjectLabel,
  setupSwiperOurEndedWork,
  swiperClientFeetbackLabel,
} from '/src/js/modules';

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  handleHeaderScroll();
  initAllSpoilers();
  scrollButtonToTop();
  swiperOurProjectLabel();
  setupSwiperOurEndedWork();
  swiperClientFeetbackLabel();
});
