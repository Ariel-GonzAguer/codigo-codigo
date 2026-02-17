import '@testing-library/jest-dom';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Limpieza después de cada test
afterEach(() => {
  cleanup();
});
