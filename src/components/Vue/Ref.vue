<template>
  <div class="border border-gray-300 p-4 rounded">
    <div>
      <button @click="decrement">-</button>
      <strong style="margin:0 1rem">{{ count }}</strong>
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
const increment = () => count.value++;
const decrement = () => count.value--;
</script>

<style scoped>
button { padding: 0.3rem 0.6rem; border-radius: 4px; background-color: #e3e3e3; color: black }
</style>
