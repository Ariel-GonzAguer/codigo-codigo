/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    // Incluir archivos .vue como tests (SFC) además de los patrones tradicionales
    include: ['src/__tests__/**/*.vue', 'src/__tests__/**/*.spec.(ts|tsx|js|jsx)', 'src/__tests__/Vue*.test.*'],
    setupFiles: ['./src/__tests__/setup.ts'],
    globals: true,
  },
});
