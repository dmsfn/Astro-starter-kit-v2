/* eslint-disable no-undef */
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import playformCompress from '@playform/compress';

import purgecss from 'astro-purgecss';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    purgecss({
      variables: true,
      keyframes: false,
      safelist: {
        greedy: [
          /*astro*/
        ],
      },
      content: [process.cwd() + '/src/**/*.{astro,jsx,tsx,css}'],
    }),
    playformCompress({
      Image: false,
      SVG: false,
    }),
  ],
});
