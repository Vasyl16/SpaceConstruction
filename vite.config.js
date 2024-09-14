import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

import {
  homeContext,
  workContext,
  endedProjectContext,
  serviceContext,
  interiorDesignContext,
  aboutContext,
  positionsContext,
  newsContext,
  contactContext,
} from './src/js/hbs/context';

import { getContext, ifContains } from './src/js/hbs/utils';

const contexts = {
  index: homeContext,
  work: workContext,
  endedProject: endedProjectContext,
  service: serviceContext,
  interiorDesign: interiorDesignContext,
  about: aboutContext,
  positions: positionsContext,
  news: newsContext,
  contact: contactContext,
};

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        service: './pages/service/service.html',
        interiorDesign: './pages/service/interiorDesign.html',
        about: './pages/about/about.html',
        work: './pages/work/work.html',
        endedProject: './pages/work/endedProject.html',
        positions: './pages/about/positions.html',
        news: './pages/news/news.html',
        contact: './pages/contact/contact.html',
      },
    },
  },

  plugins: [
    handlebars({
      context: (fileName) => getContext(fileName, contexts),

      partialDirectory: './src/html/templates',

      helpers: {
        ifContains,
      },
    }),
  ],

  base: '/SpaceConstruction/',
});
