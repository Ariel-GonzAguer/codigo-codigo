/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    // Incluir únicamente tests destinados a React (archivos que terminan en -react.test.ts|tsx
    // o el archivo principal UseState.test.tsx). Evitar recoger tests de Preact/Svelte/Vue.
    include: ['src/__tests__/**/React-*.test.{ts,tsx}'],
    exclude: ['src/__tests__/Vue-*.test.*', 'src/__tests__/**/*.vue', 'src/__tests__/**/Preact-*.test.*', 'src/__tests__/**/Svelte-*.test.*'],
    setupFiles: ['./src/__tests__/setup.ts'],
    globals: true,
  },
});
