import Swiper from 'swiper/bundle';

// swiper our-projects vars
const swiperOurProject = '.swiper-our-project';
const swiperOurProjectButtonPrev = '.swiper-our-projects-button-prev';
const swiperOurProjectButtonNext = '.swiper-our-projects-button-next';

// config swiper our-projects
export const swiperOurProjectLabel = () => {
  new Swiper(swiperOurProject, {
    slidesPerView: 1, // Show 3 slides at once
    spaceBetween: '5%',
    loop: false,
    navigation: {
      nextEl: swiperOurProjectButtonNext,
      prevEl: swiperOurProjectButtonPrev,
    },
    breakpoints: {
      1024: { slidesPerView: 3, spaceBetween: 30 },
      500: { slidesPerView: 2 },
    },
  });
};
