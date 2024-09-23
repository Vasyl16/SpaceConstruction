import '/src/scss/pages/service.scss';

import {
  initBurgerMenu,
  handleHeaderScroll,
  scrollButtonToTop,
} from '/src/js/modules';

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  handleHeaderScroll();
  scrollButtonToTop();
});
