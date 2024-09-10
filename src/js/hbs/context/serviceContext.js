import { footerData } from './footer/footerContextData';
import { navItems } from './header/header';

export const serviceContext = {
  headerData: {
    navItems,
    currentPath: 'service',
  },

  welcomeBlockData: {
    title: 'SERVICES',
    text: `If you are looking for a full-service construction company, look to Createx Construction Bureau. We are doing our best to be a partner for all of your construction needs.`,
    pathItems: [
      { path: 'Homepage', href: '/' },
      { path: 'Services', href: '/src/html/pages/service/service.html' },
    ],
  },

  footerData,
};
