import Swiper from 'swiper/bundle';

import { swiperThumbnailOurEndedProjectLabel } from './swiperThumbnailOurEndedProject';

// swiper main vars
const swiperOurEndedProject = '.swiper-our-ended-project';
const swiperOurEndedProjectButtonPrev = '.swiper-our-ended-project-button-prev';
const swiperOurEndedProjectButtonNext = '.swiper-our-ended-project-button-next';

export const swiperOurEndedProjectLabel = () => {
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
