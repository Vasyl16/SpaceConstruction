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
        href: '/SpaceConstruction/src/html/pages/work/work.html',
      },
    ],
  },

  supportedPartnersData: {
    title: 'Our clients',

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
