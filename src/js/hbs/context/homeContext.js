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
        imgSrc: '/icons/_sprite.svg#core-values-img-1',
        valueTitle: 'Quality',
        valueText:
          'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.',
      },

      {
        imgSrc: '/icons/_sprite.svg#core-values-img-2',
        valueTitle: 'Safety',
        valueText:
          'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.',
      },

      {
        imgSrc: '/icons/_sprite.svg#core-values-img-3',
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
        imgSrcWebp: '/img/templates/our-projects/our-projects-img-1.webp',
        title: 'Red Finger Building',
        category: 'Business Centers',
      },
      {
        imgSrc: '/img/templates/our-projects/our-projects-img-2.jpg',
        imgSrcWebp: '/img/templates/our-projects/our-projects-img-2.webp',
        title: 'Cubes Building',
        category: 'Business Centers',
      },
      {
        imgSrc: '/img/templates/our-projects/our-projects-img-3.jpg',
        imgSrcWebp: '/img/templates/our-projects/our-projects-img-3.webp',
        title: 'The Pencil Building',
        category: 'Stores & Malls',
      },
      {
        imgSrc: '/img/templates/our-projects/our-projects-img-1.jpg',
        imgSrcWebp: '/img/templates/our-projects/our-projects-img-1.webp',
        title: 'Red Finger Building',
        category: 'Business Centers',
      },
      {
        imgSrc: '/img/templates/our-projects/our-projects-img-2.jpg',
        imgSrcWebp: '/img/templates/our-projects/our-projects-img-2.webp',
        title: 'Cubes Building',
        category: 'Business Centers',
      },
      {
        imgSrc: '/img/templates/our-projects/our-projects-img-3.jpg',
        imgSrcWebp: '/img/templates/our-projects/our-projects-img-3.webp',
        title: 'The Pencil Building',
        category: 'Stores & Malls',
      },
    ],

    title: 'Browse our selected projects and learn more about our work',
  },

  supportedPartnersData: {
    title: 'Supported by 12+ partners',

    images: [
      {
        img: '/img/templates/partners/partners-img-1.png',
        imgWebp: '/img/templates/partners/partners-img-1.webp',
      },
      {
        img: '/img/templates/partners/partners-img-2.png',
        imgWebp: '/img/templates/partners/partners-img-2.webp',
      },
      {
        img: '/img/templates/partners/partners-img-3.png',
        imgWebp: '/img/templates/partners/partners-img-3.webp',
      },
      {
        img: '/img/templates/partners/partners-img-4.png',
        imgWebp: '/img/templates/partners/partners-img-4.webp',
      },
      {
        img: '/img/templates/partners/partners-img-5.png',
        imgWebp: '/img/templates/partners/partners-img-5.webp',
      },
      {
        img: '/img/templates/partners/partners-img-6.png',
        imgWebp: '/img/templates/partners/partners-img-6.webp',
      },
    ],
  },

  clientFitbackData,

  footerData,
};
