import Swiper from 'swiper/bundle';

// swiper swiper-our-history
const swiperOurHistory = '.swiper-our-history';
const swiperOurHistoryButtonPrev = '.swiper-our-history-button-prev';
const swiperOurHistoryButtonNext = '.swiper-our-history-button-next';
const swiperOurHistoryPagination = '.custom-pagination-swiper-our-history';

// config swiper client-fitback
export const swiperOurHistoryLabel = () => {
  new Swiper(swiperOurHistory, {
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    speed: 600,
    navigation: {
      nextEl: swiperOurHistoryButtonNext,
      prevEl: swiperOurHistoryButtonPrev,
    },
    pagination: {
      el: swiperOurHistoryPagination, // Custom pagination container
      clickable: true, // Make pagination bullets clickable
      renderBullet: function (index, className) {
        const swiperOurHistoryPaginationClass =
          swiperOurHistoryPagination.slice(1);
        const slideTitle = this.slides[index].dataset.title; // Get the custom title for each slide
        const isLast = index === this.slides.length - 1;

        return `<div class=" ${className} ${swiperOurHistoryPaginationClass}__bullet">
      <p class="${swiperOurHistoryPaginationClass}__title">${slideTitle}</p>
      <span class="${swiperOurHistoryPaginationClass}__line  ${isLast ? swiperOurHistoryPaginationClass + '__line_last-item' : ''}"></span>
      </div>`;
      },
    },
  });
};
