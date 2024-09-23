import '/src/scss/pages/positions.scss';

import {
  initBurgerMenu,
  handleHeaderScroll,
  initAllSpoilers,
  handlePopupItems,
  scrollButtonToTop,
} from '/src/js/modules';

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  handleHeaderScroll();
  initAllSpoilers();
  handlePopupItems();
  scrollButtonToTop();
});
