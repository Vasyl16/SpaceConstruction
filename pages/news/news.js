import '/src/scss/pages/news.scss';

import {
  initBurgerMenu,
  handleHeaderScroll,
  initAllSpoilers,
  scrollButtonToTop,
} from '/src/js/modules';

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  handleHeaderScroll();
  initAllSpoilers();
  scrollButtonToTop();
});
