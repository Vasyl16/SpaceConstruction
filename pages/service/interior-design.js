import '/src/scss/pages/interior-design.scss';

import {
  initBurgerMenu,
  handleHeaderScroll,
  initAllSpoilers,
  scrollButtonToTop,
  swiperPricingLabel,
  swiperOurProjectLabel,
} from '/src/js/modules';

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  handleHeaderScroll();
  initAllSpoilers();
  scrollButtonToTop();
  swiperPricingLabel();
  swiperOurProjectLabel();
});
