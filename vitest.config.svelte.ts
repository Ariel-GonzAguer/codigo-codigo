/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  test: {
    environment: 'jsdom',
    include: ['src/__tests__/**/*.svelte.test.(ts|js)', 'src/__tests__/Svelte*.test.*'],
    setupFiles: ['./src/__tests__/setup.ts'],
    globals: true,
  },
});
