<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  cel: {
    type: String,

  },
  index: {
    type: Number,
  },

}
)

const emit = defineEmits(['clicks'])

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
