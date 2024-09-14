import '../scss/style.scss';

import {
  initBurgerMenu,
  handleHeaderScroll,
  initAllSpoilers,
  initAllSwipers,
  videoHandler,
  handlePopupItems,
  scrollToBlockFun,
  handleScrollOnRedirect,
  scrollButtonToTop,
} from './modules';

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  handleHeaderScroll();
  initAllSpoilers();
  initAllSwipers();
  videoHandler();
  handlePopupItems();
  scrollToBlockFun();
  handleScrollOnRedirect();
  scrollButtonToTop();
});
