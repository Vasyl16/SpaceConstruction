import Swiper from 'swiper/bundle';

const swiperClientFitback = '.swiper-client-fitback';
const swiperClientFitbackButtonPrev = '.swiper-client-fitback-button-prev';
const swiperClientFitbackButtonNext = '.swiper-client-fitback-button-next';

// config swiper client-fitback

export const swiperClientFeetbackLabel = () => {
  new Swiper(swiperClientFitback, {
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    speed: 600,
    loop: true,
    autoHeight: true,
    navigation: {
      nextEl: swiperClientFitbackButtonNext,
      prevEl: swiperClientFitbackButtonPrev,
    },
  });
};
