import Swiper from 'swiper/bundle';

// swiper main vars
const swiperMain = '.swiper-main';
const swiperMainButtonPrev = '.swiper-main-button-prev';
const swiperMainButtonNext = '.swiper-main-button-next';
const swiperMainButtonPagination = '.swiper-main-pagination';

// config swiper main
export const swiperMainLabel = () => {
  new Swiper(swiperMain, {
    slidesPerView: 1, // Number of slides visible at once
    spaceBetween: 10, // Space between slides in px
    spaceBetween: 0,
    speed: 1000,
    navigation: {
      nextEl: swiperMainButtonNext,
      prevEl: swiperMainButtonPrev,
    },
    pagination: {
      el: swiperMainButtonPagination,
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '">' +
          '  <span class="' +
          (className + '-number') +
          '">' +
          '0' +
          (index + 1) +
          '</span>' +
          '</span>'
        );
      },
    },
    autoplay: {
      delay: 2500, // Delay between slides (in ms)
      disableOnInteraction: false, // Do not disable autoplay on user interaction
    },
  });
};
