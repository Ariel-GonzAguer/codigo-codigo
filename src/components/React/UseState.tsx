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
    <section>
      <p>Este es un componente de ejemplo en React.</p>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
      <button onClick={decrementarContador}>Decrementar</button>
    </section>
  );
}
