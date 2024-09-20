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
      { path: 'Homepage', href: '/SpaceConstruction/' },
      {
        path: 'About us',
        href: '/SpaceConstruction/pages/about/about.html',
      },
    ],
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

  supportedPartnersData: {
    title: 'Our partners',

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
      {
        img: '/img/templates/partners/partners-img-7.png',
        imgWebp: '/img/templates/partners/partners-img-7.webp',
      },
      {
        img: '/img/templates/partners/partners-img-8.png',
        imgWebp: '/img/templates/partners/partners-img-8.webp',
      },
      {
        img: '/img/templates/partners/partners-img-9.png',
        imgWebp: '/img/templates/partners/partners-img-9.webp',
      },
      {
        img: '/img/templates/partners/partners-img-10.png',
        imgWebp: '/img/templates/partners/partners-img-10.webp',
      },
      {
        img: '/img/templates/partners/partners-img-11.png',
        imgWebp: '/img/templates/partners/partners-img-11.webp',
      },
      {
        img: '/img/templates/partners/partners-img-12.png',
        imgWebp: '/img/templates/partners/partners-img-12.webp',
      },
    ],

    text: 'We are supported by 12+ industry bodies and media partners',
  },

  footerData,
};
