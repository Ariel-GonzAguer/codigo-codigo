import { render, screen, fireEvent } from '@testing-library/preact';
import '@testing-library/jest-dom';
import UseState from '../components/Preact/UseState';
import { describe, test, expect } from 'vitest';

describe('UseState Preact', () => {
  test('muestra el valor inicial de 0', () => {
    render(<UseState />);
    
    // Buscar el valor del contador
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('Contador con Preact')).toBeInTheDocument();
  });
  
  test('incrementa el contador al hacer click en +1', async () => {
    render(<UseState />);
    
    const incrementButton = screen.getByText('+1');
    
    await fireEvent.click(incrementButton);
    
    expect(screen.getByText('1')).toBeInTheDocument();
  });
  
  test('decrementa el contador al hacer click en -1', async () => {
    render(<UseState />);
    
    const decrementButton = screen.getByText('-1');
    
    await fireEvent.click(decrementButton);
    
    // Evitar ambigüedad: puede haber múltiples matches (botón y valor).
    // Usar getAllByText y asegurarse de que existe al menos un elemento con el texto esperado.
    const matches = screen.getAllByText('-1');
    // Debe existir al menos un match y alguno de ellos debe ser un elemento que no sea boton (el contador)
    expect(matches.length).toBeGreaterThanOrEqual(1);
    // Verificar que alguno de los matches contiene la clase del contador (text-3xl)
    const hasCounter = matches.some(el => el.classList && el.classList.contains('text-3xl'));
    expect(hasCounter).toBe(true);
  });
  
  test('maneja múltiples clicks correctamente', async () => {
    render(<UseState />);
    
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