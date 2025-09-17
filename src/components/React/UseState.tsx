import { useState } from 'react';

export default function UseState() {
  const [contador, setContador] = useState(0);

  function incrementarContador() {
    setContador(contador + 1);
  }

  function decrementarContador() {
    setContador(contador - 1);
  }

  return (
    <section className="p-4 border rounded-md">
      <p>Contador: {contador}</p>
      <div className="flex gap-2 mt-4">
        <button
          onClick={incrementarContador}
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
        >
          Incrementar
        </button>
        <button
          onClick={decrementarContador}
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
        >
          Decrementar
        </button>
      </div>
    </section>
  );
}
