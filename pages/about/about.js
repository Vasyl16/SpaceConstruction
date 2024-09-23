import '/src/scss/pages/about.scss';

import {
  initBurgerMenu,
  handleHeaderScroll,
  initAllSpoilers,
  scrollButtonToTop,
  handleScrollOnRedirect,
  swiperOurHistoryLabel,
  setupSwiperOurTeam,
} from '/src/js/modules';

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  handleHeaderScroll();
  initAllSpoilers();
  scrollButtonToTop();
  handleScrollOnRedirect();
  swiperOurHistoryLabel();
  setupSwiperOurTeam();
});
