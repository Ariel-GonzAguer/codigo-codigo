/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';

export default defineConfig({
  plugins: [
    svelte({
      hot: !process.env.VITEST,
      // Forzar compatibilidad con la API de componente legacy (Svelte 4 style)
      compilerOptions: {
        compatibility: { componentApi: 4 }
      }
    }),
  // Integración de testing-library para Svelte (auto-cleanup, utilidades)
  // Forzar casteo a PluginOption para evitar errores de tipos cuando hay múltiples
  // versiones/instancias de Vite en node_modules (problema de tipos entre plugins).
  // Si el proyecto no encuentra las declaraciones de 'vite', usar any evita
  // errores de compilación manteniendo el casteo en tiempo de ejecución.
  svelteTesting() as unknown as any,
  ],
  test: {
    environment: 'happy-dom',
    // Incluir únicamente tests de Svelte (archivos *.svelte.test.ts|js)
    include: ['src/__tests__/**/Svelte-*.test.{ts,js}'],
    // Usar setup específico para Svelte que limpia solo testing-library/svelte
    setupFiles: ['./src/__tests__/setup.svelte.ts'],
    globals: true,
  },
  define: {
    // Para compatibility con Svelte 5
    // Evitar resolución a la entrada SSR durante tests
    'import.meta.env.SSR': 'false',
    'import.meta.vitest': 'undefined',
  },
});
