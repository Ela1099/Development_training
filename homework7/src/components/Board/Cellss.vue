<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props=defineProps< {
  cel: string|null,
  index: number,
}>()


const emit = defineEmits<{
  (e: 'clicks', index: number): void; 
}>();

function click() {
  emit('clicks', props.index)

}

</script>

<template>
  <button class="cel" @click="click">{{ cel }} </button>

</template>

<style scoped>
.cel {
  width: 50px;
  height: 50px;
  border: 1px solid;
  box-shadow: 3px 4px 1px 2px rgba(1, 1, 1, 0.1);
  ;
}
</style>