import { render, screen, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import UseState from '../components/Svelte/UseState.svelte';
import { describe, test, expect, beforeEach, afterEach } from 'vitest';

describe('UseState Svelte', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    render(UseState);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('muestra el valor inicial de 0', () => {
    // Buscar el valor del contador
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('Contador con Svelte')).toBeInTheDocument();
  });

  test('incrementa el contador al hacer click en +1', async () => {
    const incrementButton = screen.getByText('+1');

    await fireEvent.click(incrementButton);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('decrementa el contador al hacer click en -1', async () => {
    // Seleccionar el botón por su role para evitar colisiones con el valor mostrado
    const decrementButton = screen.getByRole('button', { name: '-1' });

    await fireEvent.click(decrementButton);

    // El contador se renderiza en un div con la clase text-3xl
    const counter = screen.getByText('-1', { selector: 'div.text-3xl' });
    expect(counter).toBeInTheDocument();
  });

  test('maneja múltiples clicks correctamente', async () => {
    const incrementButton = screen.getByText('+1');
    const decrementButton = screen.getByText('-1');

    // Incrementar 3 veces
    await fireEvent.click(incrementButton);
    await fireEvent.click(incrementButton);
    await fireEvent.click(incrementButton);

    expect(screen.getByText('3')).toBeInTheDocument();

    // Decrementar 2 veces
    await fireEvent.click(decrementButton);
    await fireEvent.click(decrementButton);

    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
