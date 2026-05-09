import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/vue';
import RefComponent from '../components/Vue/Ref.vue';

describe('Componente Vue Ref Demo', () => {
  it('debe renderizar el componente Ref.vue', () => {
    const { getByText } = render(RefComponent);

    // Verificar que el componente renderiza el contador inicial
    expect(getByText('0')).toBeDefined();
    // Verificar que los botones están presentes
    expect(getByText('+')).toBeDefined();
    expect(getByText('-')).toBeDefined();
  });

  it('debe poder incrementar el contador', async () => {
    const { getByText } = render(RefComponent);

    const botonMas = getByText('+');

    // Hacer clic en el botón incrementar
    await fireEvent.click(botonMas);

    // Verificar que el contador se incrementó
    expect(getByText('1')).toBeDefined();
  });
});
