// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';


import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  experimental: { svg: true },
  output: 'server',
  adapter: netlify({
    imageCDN: false,
  }),
  image: {
    domains: ['pb-sae-203.lison-pruvost.fr'],
  },
});

