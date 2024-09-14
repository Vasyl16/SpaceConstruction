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
      { path: 'Homepage', href: '/SpaceConstruction/' },
      {
        path: 'Contacts',
        href: '/SpaceConstruction/pages/contact/contact.html',
      },
    ],
  },

  footerData,
};
