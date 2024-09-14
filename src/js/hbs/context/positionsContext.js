import { footerData } from './footer/footerContextData';
import { navItems } from './header/header';

export const positionsContext = {
  headerData: {
    navItems,
    currentPath: 'about/positions',
  },
  welcomeBlockData: {
    title: 'AVAILABLE POSITIONS',
    text: `Build your career with Createx Construction Bureau.`,
    pathItems: [
      { path: 'Homepage', href: '/SpaceConstruction/' },
      {
        path: 'About us',
        href: '/SpaceConstruction/src/html/pages/about/about.html',
      },
      {
        path: 'Available Positions',
        href: '/SpaceConstruction/src/html/pages/about/positions.html',
      },
    ],
  },

  coreValuesData: {
    title: 'Employee benefits',

    missionText: 'There’s always room for talent.',

    items: [
      {
        imgSrc: '/img/templates/core-values/employee-benefits-img-1.svg',
        valueTitle: 'Training',
        valueText:
          'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.',
      },

      {
        imgSrc: '/img/templates/core-values/employee-benefits-img-2.svg',
        valueTitle: 'Professional Growth',
        valueText:
          'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.',
      },

      {
        imgSrc: '/img/templates/core-values/employee-benefits-img-3.svg',
        valueTitle: 'Growing Salary',
        valueText:
          'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.',
      },
    ],
  },

  footerData,
};
