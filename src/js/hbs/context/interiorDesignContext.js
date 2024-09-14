import { footerData } from './footer/footerContextData';
import { navItems } from './header/header';

export const interiorDesignContext = {
  headerData: {
    navItems,
    currentPath: 'service/interiorDesign',
  },

  welcomeBlockData: {
    title: 'INTERIOR DESIGN',
    text: `Dui augue nec mi mi. Ut ac lectus donec fames pellentesque. Laoreet aenean vulputate elementum blandit amet.`,
    pathItems: [
      { path: 'Homepage', href: '/SpaceConstruction/' },
      {
        path: 'Services',
        href: '/SpaceConstruction/src/html/pages/service/service.html',
      },
      {
        path: 'InteriorDesign',
        href: '/SpaceConstruction/src/html/pages/service/interiorDesign.html',
      },
    ],
  },

  ourProjectsData: {
    items: [
      {
        imgSrc:
          '/img/templates/our-projects/our-projects-interior-design-img-1.jpg',
        title: 'Kids Bedroom With Decorations',
        category: 'Apartments & flats',
      },
      {
        imgSrc:
          '/img/templates/our-projects/our-projects-interior-design-img-2.jpg',
        title: 'Modern Double Bedroom',
        category: 'Business Centers',
      },
      {
        imgSrc:
          '/img/templates/our-projects/our-projects-interior-design-img-3.jpg',
        title: 'Scandinavian Style Interior',
        category: 'Private houses',
      },
      {
        imgSrc:
          '/img/templates/our-projects/our-projects-interior-design-img-1.jpg',
        title: 'Kids Bedroom With Decorations',
        category: 'Apartments & flats',
      },
      {
        imgSrc:
          '/img/templates/our-projects/our-projects-interior-design-img-2.jpg',
        title: 'Modern Double Bedroom',
        category: 'Business Centers',
      },
      {
        imgSrc:
          '/img/templates/our-projects/our-projects-interior-design-img-3.jpg',
        title: 'Scandinavian Style Interior',
        category: 'Private houses',
      },
    ],

    title: 'Related projects',
  },

  supportedPartnersData: {
    title: 'Supported by 12+ partners',

    images: [
      '/img/templates/partners/partners-img-1.svg',
      '/img/templates/partners/partners-img-2.svg',
      '/img/templates/partners/partners-img-3.svg',
      '/img/templates/partners/partners-img-4.svg',
      '/img/templates/partners/partners-img-5.svg',
      '/img/templates/partners/partners-img-6.svg',
    ],
  },

  footerData,
};
