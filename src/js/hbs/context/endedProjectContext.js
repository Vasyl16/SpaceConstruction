import { footerData } from './footer/footerContextData';
import { navItems } from './header/header';

export const endedProjectContext = {
  headerData: {
    navItems,
    currentPath: 'work/endedProject',
  },

  ourProjectsData: {
    items: [
      {
        imgSrc: '/img/templates/our-projects/our-projects-ended-work-img-1.jpg',
        title: 'Luxury Beach House',
        category: 'Private Houses',
      },

      {
        imgSrc: '/img/templates/our-projects/our-projects-ended-work-img-2.jpg',
        title: 'Brown and Gray Painted House',
        category: 'Private Houses',
      },

      {
        imgSrc: '/img/templates/our-projects/our-projects-ended-work-img-3.jpg',
        title: 'Scandinavian Style Interior',
        category: 'Private houses',
      },

      {
        imgSrc: '/img/templates/our-projects/our-projects-ended-work-img-1.jpg',
        title: 'Luxury Beach House',
        category: 'Private Houses',
      },

      {
        imgSrc: '/img/templates/our-projects/our-projects-ended-work-img-2.jpg',
        title: 'Brown and Gray Painted House',
        category: 'Private Houses',
      },

      {
        imgSrc: '/img/templates/our-projects/our-projects-ended-work-img-3.jpg',
        title: 'Scandinavian Style Interior',
        category: 'Private houses',
      },
    ],

    title: 'Similar projects',
  },

  footerData,
};
