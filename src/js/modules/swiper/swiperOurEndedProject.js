import Swiper from 'swiper/bundle';

// swiper thumbnail-our-ended-project

const swiperThumbnailOurEndedProject = '.swiper-thumbnail-our-ended-project';

// swiper main vars
const swiperOurEndedProject = '.swiper-our-ended-project';
const swiperOurEndedProjectButtonPrev = '.swiper-our-ended-project-button-prev';
const swiperOurEndedProjectButtonNext = '.swiper-our-ended-project-button-next';

// const config thumbnail-our-ended-project

export const swiperOurEndedProjectLabel = () => {
  const swiperThumbnailOurEndedProjectLabel = new Swiper(
    swiperThumbnailOurEndedProject,
    {
      slidesPerView: 'auto', // Automatically size each thumbnail based on its content width
      slideToClickedSlide: true,
      spaceBetween: 20,
    }
  );

  new Swiper(swiperOurEndedProject, {
    slidesPerView: 1,
    speed: 700,
    navigation: {
      nextEl: swiperOurEndedProjectButtonNext,
      prevEl: swiperOurEndedProjectButtonPrev,
    },
    thumbs: {
      swiper: swiperThumbnailOurEndedProjectLabel,
    },
  });
};
