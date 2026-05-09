import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import UseState from '../components/React/UseState';

describe('Componente UseState', () => {
  it('debe mostrar el contador inicial en 0', () => {
    render(<UseState />);
    expect(screen.getByText(/Contador: 0/)).toBeInTheDocument();
  });

  it('debe incrementar el contador al hacer clic en "Incrementar"', () => {
    render(<UseState />);
    const botonIncrementar = screen.getByText('Incrementar');
    fireEvent.click(botonIncrementar);
    expect(screen.getByText(/Contador: 1/)).toBeInTheDocument();
  });

  it('debe decrementar el contador al hacer clic en "Decrementar"', () => {
    render(<UseState />);
    const botonDecrementar = screen.getByText('Decrementar');
    fireEvent.click(botonDecrementar);
    expect(screen.getByText(/Contador: -1/)).toBeInTheDocument();
  });

  it('debe incrementar y luego decrementar correctamente', () => {
    render(<UseState />);
    const botonIncrementar = screen.getByText('Incrementar');
    const botonDecrementar = screen.getByText('Decrementar');
    fireEvent.click(botonIncrementar);
    fireEvent.click(botonIncrementar);
    fireEvent.click(botonDecrementar);
    expect(screen.getByText(/Contador: 1/)).toBeInTheDocument();
  });
});
