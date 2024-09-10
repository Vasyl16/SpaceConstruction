import Swiper from 'swiper/bundle';

// swiper thumbnail-our-ended-project
const swiperThumbnailOurEndedProject = '.swiper-thumbnail-our-ended-project';

// const config thumbnail-our-ended-project
export const swiperThumbnailOurEndedProjectLabel = () => {
  new Swiper(swiperThumbnailOurEndedProject, {
    slidesPerView: 'auto', // Automatically size each thumbnail based on its content width
    slideToClickedSlide: true,
    spaceBetween: 20,
  });
};
