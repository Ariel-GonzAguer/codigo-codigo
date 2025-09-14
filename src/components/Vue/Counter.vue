<script setup lang="ts">
import { ref } from 'vue';
const contador = ref(0);
function inc() {
  contador.value++;
}
function dec() {
  contador.value--;
}
</script>

<template>
  <section>
    <p>Ejemplo contador en Vue.</p>
    <p>Contador: {{ contador }}</p>
    <button @click="inc">Incrementar</button>
    <button @click="dec">Decrementar</button>
  </section>
</template>

<style scoped>
section {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 260px;
}
button {
  margin-right: 0.5rem;
}
</style>
