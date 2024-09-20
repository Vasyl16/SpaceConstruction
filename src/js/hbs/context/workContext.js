import { footerData } from './footer/footerContextData';
import { clientFitbackData } from './clientFitback/clientFitbackContextData';
import { navItems } from './header/header';

export const workContext = {
  headerData: {
    navItems,
    currentPath: 'work',
  },

  welcomeBlockData: {
    title: 'OUR WORK',
    text: `Our portfolio represents 20 years of construction experience backed by a passion for perfect client service, quality and innovations in consctuction industry.`,
    pathItems: [
      { path: 'Homepage', href: '/SpaceConstruction/' },
      {
        path: 'Work',
        href: '/SpaceConstruction/pages/work/work.html',
      },
    ],
  },

  supportedPartnersData: {
    title: 'Our clients',

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
