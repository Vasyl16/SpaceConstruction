import Swiper from 'swiper/bundle';

// swiper our-ended-work
const swiperOurEndedWork = '.swiper-our-ended-work';
const swieprOurEndedWorkButtonPrev = '.swiper-our-ended-work-button-prev';
const swieprOurEndedWorkButtonNext = '.swiper-our-ended-work-button-next';
let swiperOurEndedWorkLabel = null;

// config swiper our-ended-work

const initSwiperOurEndedWork = () => {
  const screenWidth = window.innerWidth;

  // Check if screen width is less than 768px and Swiper isn't initialized
  if (screenWidth < 767.98 && !swiperOurEndedWorkLabel) {
    swiperOurEndedWorkLabel = new Swiper(swiperOurEndedWork, {
      slidesPerView: 1,
      spaceBetween: '5%',
      loop: false,
      navigation: {
        nextEl: swieprOurEndedWorkButtonNext,
        prevEl: swieprOurEndedWorkButtonPrev,
      },
      breakpoints: {
        500: { slidesPerView: 2 },
      },
    });
  }

  // If the screen is greater than or equal to 768px and Swiper is initialized, destroy it
  if (screenWidth >= 767.98 && swiperOurEndedWorkLabel) {
    swiperOurEndedWorkLabel.destroy(true, true);
    swiperOurEndedWorkLabel = undefined;
  }
};

// Initialize Swiper on page load

export const setupSwiperOurEndedWork = () => {
  if (document.querySelector(swieprOurEndedWorkButtonNext)) {
    initSwiperOurEndedWork();

    // Dynamically check for screen resizing and re-initialize or destroy the Swiper
    window.addEventListener('resize', () => {
      initSwiperOurEndedWork();
    });
  }
};
