import '@testing-library/jest-dom';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/svelte';

// Limpieza específica para tests de Svelte
afterEach(() => {
  cleanup();
});
