/** @jsxImportSource solid-js */
import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@solidjs/testing-library';
import UseStateDemo from '../components/SolidJS/CreateSignal';

describe('UseStateDemo', () => {
  it('debe mostrar el valor inicial en 0', () => {
    const { getByText } = render(() => <UseStateDemo />);
    expect(getByText('0')).toBeDefined();
  });

  it('debe incrementar el contador al hacer clic en "+"', async () => {
    const { getByText } = render(() => <UseStateDemo />);
    const botonMas = getByText('+');
    await fireEvent.click(botonMas);
    expect(getByText('1')).toBeDefined();
  });

  it('debe decrementar el contador al hacer clic en "-"', async () => {
    const { getByText } = render(() => <UseStateDemo />);
    const botonMenos = getByText('-');
    await fireEvent.click(botonMenos);
    expect(getByText('-1')).toBeDefined();
  });

  it('debe incrementar y luego decrementar correctamente', async () => {
    const { getByText } = render(() => <UseStateDemo />);
    const botonMas = getByText('+');
    const botonMenos = getByText('-');
    await fireEvent.click(botonMas);
    await fireEvent.click(botonMas);
    await fireEvent.click(botonMenos);
    expect(getByText('1')).toBeDefined();
  });
});
