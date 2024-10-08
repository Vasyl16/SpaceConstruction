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
  singleNewsContext,
} from './src/js/hbs/context';

import { getContext, ifContains } from './src/js/hbs/utils';

const contexts = {
  index: homeContext,
  work: workContext,
  'ended-project': endedProjectContext,
  service: serviceContext,
  'interior-design': interiorDesignContext,
  about: aboutContext,
  positions: positionsContext,
  news: newsContext,
  'single-news': singleNewsContext,
  contact: contactContext,
};

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        service: './pages/service/service.html',
        interiorDesign: './pages/service/interior-design.html',
        about: './pages/about/about.html',
        work: './pages/work/work.html',
        endedProject: './pages/work/ended-project.html',
        positions: './pages/about/positions.html',
        news: './pages/news/news.html',
        contact: './pages/contact/contact.html',
        singleNews: './pages/news/single-news.html',
      },
      output: {
        entryFileNames: 'assets/[name].js',
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
