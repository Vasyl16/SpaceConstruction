import { footerData } from './footer/footerContextData';
import { navItems } from './header/header';

export const aboutContext = {
  headerData: {
    navItems,
    currentPath: 'about',
  },
  welcomeBlockData: {
    title: 'ABOUT US',
    text: `Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service.`,
    pathItems: [
      { path: 'Homepage', href: '/' },
      { path: 'About us', href: '/src/html/pages/work/about.html' },
    ],
  },

  coreValuesData: {
    title: 'Our core values',

    missionText:
      'Our mission is to set the highest standards for construction sphere.',

    items: [
      {
        imgSrc: '/img/templates/core-values/core-values-img-1.svg',
        valueTitle: 'Quality',
        valueText:
          'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.',
      },

      {
        imgSrc: '/img/templates/core-values/core-values-img-2.svg',
        valueTitle: 'Safety',
        valueText:
          'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.',
      },

      {
        imgSrc: '/img/templates/core-values/core-values-img-3.svg',
        valueTitle: 'Comfort',
        valueText:
          'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.',
      },
    ],
  },

  supportedPartnersData: {
    title: 'Our partners',

    images: [
      '/img/templates/partners/partners-img-1.svg',
      '/img/templates/partners/partners-img-2.svg',
      '/img/templates/partners/partners-img-3.svg',
      '/img/templates/partners/partners-img-4.svg',
      '/img/templates/partners/partners-img-5.svg',
      '/img/templates/partners/partners-img-6.svg',
      '/img/templates/partners/partners-img-7.svg',
      '/img/templates/partners/partners-img-8.svg',
      '/img/templates/partners/partners-img-9.svg',
      '/img/templates/partners/partners-img-10.svg',
      '/img/templates/partners/partners-img-11.svg',
      '/img/templates/partners/partners-img-12.svg',
    ],

    text: 'We are supported by 12+ industry bodies and media partners',
  },

  footerData,
};
