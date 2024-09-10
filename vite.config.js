import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

import {
  homeContext,
  workContext,
  endedProjectContext,
  serviceContext,
  interiorDesignContext,
  aboutContext,
} from './src/js/hbs/context';

import { getContext, ifContains } from './src/js/hbs/utils';

const contexts = {
  index: homeContext,
  work: workContext,
  endedProject: endedProjectContext,
  service: serviceContext,
  interiorDesign: interiorDesignContext,
  about: aboutContext,
};

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        service: './src/html/pages/service.html',
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
});
