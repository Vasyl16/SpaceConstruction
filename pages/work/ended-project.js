import '/src/scss/pages/ended-project.scss';

import {
  initBurgerMenu,
  handleHeaderScroll,
  initAllSpoilers,
  scrollButtonToTop,
  swiperOurProjectLabel,
  swiperOurEndedProjectLabel,
} from '/src/js/modules';

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  handleHeaderScroll();
  initAllSpoilers();
  scrollButtonToTop();
  swiperOurProjectLabel();
  swiperOurEndedProjectLabel();
});
