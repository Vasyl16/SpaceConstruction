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
};

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        service: './src/html/pages/service/service.html',
        interiorDesign: './src/html/pages/service/interiorDesign.html',
        about: './src/html/pages/about/about.html',
        work: './src/html/pages/work/work.html',
        endedProject: './src/html/pages/work/endedProject.html',
        positions: './src/html/pages/about/positions.html',
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
