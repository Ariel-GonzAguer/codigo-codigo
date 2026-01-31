// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';
import preact from '@astrojs/preact';
import solidJs from '@astrojs/solid-js';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
    ssr: {
      // Esto le dice a Vite que no trate el paquete como externo
      noExternal: ['@midudev/tailwind-animations'],
    },
    optimizeDeps: {
      include: ['@midudev/tailwind-animations'],
    },
  },
  integrations: [
    mdx(),
    react({
      include: ['**/React/*'],
    }),
    preact({
      include: ['**/Preact/*'],
    }),
    solidJs({
      // Aceptar tanto `Solid` como `SolidJS` para evitar colisiones por nombre de carpeta
      include: ['**/SolidJS/**', '**/Solid/**'],
    }),
    svelte({
      include: ['**/Svelte/*'],
    }),
    vue({
      include: ['**/Vue/*'],
    }),
    sitemap(),
  ],
});
