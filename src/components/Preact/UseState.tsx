import { useState } from 'preact/hooks';

export default function UseState() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  };
  
  const decrement = () => {
    setCount(count - 1);
  };
  
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-50 rounded-lg border">
      <h3 className="text-lg font-semibold text-gray-800">Contador con Preact</h3>
      
      <div className="text-3xl font-bold text-blue-600">
        {count}
      </div>
      
      <div className="flex gap-2">
        <button 
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          -1
        </button>
        
        <button 
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          +1
        </button>
      </div>
      
      <div className="text-sm text-gray-600">
        Estado local con useState hook de Preact
      </div>
    </div>
  );
}