import { createSignal } from 'solid-js';

export default function UseStateDemo() {
  const [count, setCount] = createSignal(0);
  return (
    <div class="solid-usestate">
      <div>
        <button onClick={() => setCount(c => c - 1)}>-</button>
        <strong style={{ margin: '0 1rem' }}>{count()}</strong>
        <button onClick={() => setCount(c => c + 1)}>+</button>
      </div>
    </div>
  );
}
