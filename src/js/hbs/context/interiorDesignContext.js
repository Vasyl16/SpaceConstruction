import { footerData } from './footer/footerContextData';
import { navItems } from './header/header';

export const interiorDesignContext = {
  headerData: {
    navItems,
    currentPath: 'service/interior-design',
  },

  welcomeBlockData: {
    title: 'INTERIOR DESIGN',
    text: `Dui augue nec mi mi. Ut ac lectus donec fames pellentesque. Laoreet aenean vulputate elementum blandit amet.`,
    pathItems: [
      { path: 'Homepage', href: '/SpaceConstruction/' },
      {
        path: 'Services',
        href: '/SpaceConstruction/pages/service/service.html',
      },
      {
        path: 'Interior Design',
        href: '/SpaceConstruction/pages/service/interior-design.html',
      },
    ],
  },

  ourProjectsData: {
    items: [
      {
        imgSrc:
          '/img/templates/our-projects/our-projects-interior-design-img-1.jpg',
        imgSrcWebp:
          '/img/templates/our-projects/our-projects-interior-design-img-1.webp',
        title: 'Kids Bedroom With Decorations',
        category: 'Apartments & flats',
      },
      {
        imgSrc:
          '/img/templates/our-projects/our-projects-interior-design-img-2.jpg',
        imgSrcWebp:
          '/img/templates/our-projects/our-projects-interior-design-img-2.webp',
        title: 'Modern Double Bedroom',
        category: 'Business Centers',
      },
      {
        imgSrc:
          '/img/templates/our-projects/our-projects-interior-design-img-3.jpg',
        imgSrcWebp:
          '/img/templates/our-projects/our-projects-interior-design-img-3.webp',
        title: 'Scandinavian Style Interior',
        category: 'Private houses',
      },
      {
        imgSrc:
          '/img/templates/our-projects/our-projects-interior-design-img-1.jpg',
        imgSrcWebp:
          '/img/templates/our-projects/our-projects-interior-design-img-1.webp',
        title: 'Kids Bedroom With Decorations',
        category: 'Apartments & flats',
      },
      {
        imgSrc:
          '/img/templates/our-projects/our-projects-interior-design-img-2.jpg',
        imgSrcWebp:
          '/img/templates/our-projects/our-projects-interior-design-img-2.webp',
        title: 'Modern Double Bedroom',
        category: 'Business Centers',
      },
      {
        imgSrc:
          '/img/templates/our-projects/our-projects-interior-design-img-3.jpg',
        imgSrcWebp:
          '/img/templates/our-projects/our-projects-interior-design-img-3.webp',
        title: 'Scandinavian Style Interior',
        category: 'Private houses',
      },
    ],

    title: 'Related projects',
  },

  supportedPartnersData: {
    title: 'Supported by 12+ partners',

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

  footerData,
};
