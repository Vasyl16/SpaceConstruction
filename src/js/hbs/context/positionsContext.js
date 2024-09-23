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
        href: '/SpaceConstruction/pages/about/about.html',
      },
      {
        path: 'Available Positions',
        href: '/SpaceConstruction/pages/about/positions.html',
      },
    ],
  },

  coreValuesData: {
    title: 'Employee benefits',

    missionText: 'There’s always room for talent.',

    items: [
      {
        imgSrc: '/icons/sprite.svg#employee-benefits-icon-1',
        valueTitle: 'Training',
        valueText:
          'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.',
      },

      {
        imgSrc: '/icons/sprite.svg#employee-benefits-icon-2',
        valueTitle: 'Professional Growth',
        valueText:
          'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.',
      },

      {
        imgSrc: '/icons/sprite.svg#employee-benefits-icon-3',
        valueTitle: 'Growing Salary',
        valueText:
          'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.',
      },
    ],
  },

  footerData,
};
