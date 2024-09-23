import '/src/scss/pages/contact.scss';

import {
  initBurgerMenu,
  handleHeaderScroll,
  initAllSpoilers,
  scrollToBlockFun,
  scrollButtonToTop,
} from '/src/js/modules';

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  handleHeaderScroll();
  initAllSpoilers();
  scrollToBlockFun();
  scrollButtonToTop();
});
