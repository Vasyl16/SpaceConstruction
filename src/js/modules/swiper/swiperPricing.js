import Swiper from 'swiper/bundle';

const swiperPricing = '.swiper-pricing';

export const swiperPricingLabel = () => {
  new Swiper(swiperPricing, {
    slidesPerView: 'auto' /* Adjust to your needs */,
    freeMode: true /* Allow free scrolling */,
    grabCursor: true,
  });
};
