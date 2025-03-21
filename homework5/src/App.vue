<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';
const modelValue = ref('')
const options = ref(['apple', 'banan', 'orange', 'popopo'])
</script>


<template>
  <pre>{{ modelValue }}</pre>
  <HelloWorld v-model="modelValue" :options="options" />
  </template>

<style scoped></style>
