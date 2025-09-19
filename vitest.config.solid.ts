/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  esbuild: {
    jsx: 'preserve',
  },
  plugins: [
    solidPlugin({
      // Incluir tanto los componentes de Solid como los tests que usan Solid JSX
      include: /src\/(components\/SolidJS|__tests__)\/.*\.(jsx|tsx)$/,
    }),
  ],
  test: {
    environment: 'jsdom',
    include: ['src/__tests__/Solid-*.test.{js,jsx,ts,tsx}'],
    setupFiles: ['./src/__tests__/setup.ts'],
    globals: true,
  },
});
