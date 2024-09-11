import Swiper from 'swiper/bundle';

// swiper our-ended-work
const swiperOurTeam = '.swiper-our-team';
const swieprOurTeamButtonPrev = '.swiper-our-team-button-prev';
const swieprOurTeamButtonNext = '.swiper-our-team-button-next';
let swiperOurTeamLabel = null;

// config swiper our-ended-work

const initSwiperOurTeam = () => {
  const screenWidth = window.innerWidth;

  // Check if screen width is less than 768px and Swiper isn't initialized
  if (screenWidth < 701 && !swiperOurTeamLabel) {
    swiperOurTeamLabel = new Swiper(swiperOurTeam, {
      slidesPerView: 1,
      spaceBetween: '5%',
      loop: false,
      navigation: {
        nextEl: swieprOurTeamButtonNext,
        prevEl: swieprOurTeamButtonPrev,
      },
      breakpoints: {
        500: { slidesPerView: 2 },
      },
    });
  }

  // If the screen is greater than or equal to 768px and Swiper is initialized, destroy it
  if (screenWidth > 700 && swiperOurTeamLabel) {
    swiperOurTeamLabel.destroy(true, true);
    swiperOurTeamLabel = undefined;
  }
};

// Initialize Swiper on page load

export const setupSwiperOurTeam = () => {
  if (document.querySelector(swiperOurTeam)) {
    initSwiperOurTeam();

    // Dynamically check for screen resizing and re-initialize or destroy the Swiper
    window.addEventListener('resize', () => {
      initSwiperOurTeam();
    });
  }
};
