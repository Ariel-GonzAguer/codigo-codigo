<script>
  let count = 0;
  
  function increment() {
    count = count + 1;
  }
  
  function decrement() {
    count = count - 1;
  }
</script>

<div class="flex flex-col items-center gap-4 p-6 bg-gray-50 rounded-lg border">
  <h3 class="text-lg font-semibold text-gray-800">Contador con Svelte</h3>
  
  <div class="text-3xl font-bold text-blue-600">
    {count}
  </div>
  
  <div class="flex gap-2">
    <button 
      on:click={decrement}
      class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
    >
      -1
    </button>
    
    <button 
      on:click={increment}
      class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
    >
      +1
    </button>
  </div>
  
  <div class="text-sm text-gray-600">
    Estado local con variables reactivas de Svelte
  </div>
</div>