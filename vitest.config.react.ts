/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    // Incluir solo tests TypeScript/TSX para la suite React, excluir tests Vue
    include: ['src/__tests__/**/*.test.(ts|tsx)', 'src/__tests__/UseState.test.tsx'],
    exclude: ['src/__tests__/Vue-*.test.*', 'src/__tests__/**/*.vue'],
    setupFiles: ['./src/__tests__/setup.ts'],
    globals: true,
  },
});
