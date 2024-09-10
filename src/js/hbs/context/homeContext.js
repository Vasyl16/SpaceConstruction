import { footerData } from './footer/footerContextData';
import { clientFitbackData } from './clientFitback/clientFitbackContextData';
import { navItems } from './header/header';

export const homeContext = {
  headerData: {
    navItems,
    currentPath: 'home',
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

  ourProjectsData: {
    items: [
      {
        imgSrc: '/img/templates/our-projects/our-projects-img-1.jpg',
        title: 'Red Finger Building',
        category: 'Business Centers',
      },
      {
        imgSrc: '/img/templates/our-projects/our-projects-img-2.jpg',
        title: 'Cubes Building',
        category: 'Business Centers',
      },
      {
        imgSrc: '/img/templates/our-projects/our-projects-img-3.jpg',
        title: 'The Pencil Building',
        category: 'Stores & Malls',
      },
      {
        imgSrc: '/img/templates/our-projects/our-projects-img-1.jpg',
        title: 'Red Finger Building',
        category: 'Business Centers',
      },
      {
        imgSrc: '/img/templates/our-projects/our-projects-img-2.jpg',
        title: 'Cubes Building',
        category: 'Business Centers',
      },
      {
        imgSrc: '/img/templates/our-projects/our-projects-img-3.jpg',
        title: 'The Pencil Building',
        category: 'Stores & Malls',
      },
    ],

    title: 'Browse our selected projects and learn more about our work',
  },

  supportedPartnersData: {
    title: 'Supported by 12+ partners',

    images: [
      '/img/templates/partners/partners-img-1.svg',
      '/img/templates/partners/partners-img-2.svg',
      '/img/templates/partners/partners-img-3.svg',
      '/img/templates/partners/partners-img-4.svg',
      '/img/templates/partners/partners-img-5.svg',
      '/img/templates/partners/partners-img-6.svg',
    ],
  },

  clientFitbackData,

  footerData,
};
