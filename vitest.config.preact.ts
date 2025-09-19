/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    // Incluir tests específicos de Preact (ej: UseState-preact.test.tsx)
    include: ['src/__tests__/**/Preact-*.test.{ts,tsx}'],
    // Excluir tests de otros frameworks para evitar interferencias
    exclude: [
      'src/__tests__/**/*-react.test.{ts,tsx}',
      'src/__tests__/**/*-vue.test.{ts,tsx}',
      'src/__tests__/**/*-svelte.test.{ts,tsx}',
      'src/__tests__/**/*-solid.test.{js,jsx,ts,tsx}'
    ],
    setupFiles: ['./src/__tests__/setup.ts'],
    globals: true,
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat'
    }
  }
});
