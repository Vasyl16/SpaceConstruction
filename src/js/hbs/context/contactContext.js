import { footerData } from './footer/footerContextData';
import { navItems } from './header/header';

export const contactContext = {
  headerData: {
    navItems,
    currentPath: 'contact',
  },

  welcomeBlockData: {
    title: 'CONTACTS',
    text: `Contact us for all your construction needs. We always welcome any questions and comments.`,
    pathItems: [
      { path: 'Homepage', href: '/' },
      {
        path: 'Contacts',
        href: '/SpaceConstruction/src/html/pages/contact/contact.html',
      },
    ],
  },

  footerData,
};
