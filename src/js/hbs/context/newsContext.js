import { footerData } from './footer/footerContextData';
import { navItems } from './header/header';

export const newsContext = {
  headerData: {
    navItems,
    currentPath: 'news',
  },

  welcomeBlockData: {
    title: 'NEWS',
    text: `Stay tuned with our news, expert tips and articles.`,
    pathItems: [
      { path: 'Homepage', href: '/SpaceConstruction/' },
      {
        path: 'News',
        href: '/SpaceConstruction/src/html/pages/news/news.html',
      },
    ],
  },

  footerData,
};
