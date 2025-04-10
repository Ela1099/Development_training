<script setup>
import { ref, defineProps, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: String
  },
  options: {
    type: Array
  }
})
const emit = defineEmits(["update:modelValue"]);
const componentValue = ref(props.modelValue)

watch(() => props.modelValue, (newValue) => {
  componentValue.value = newValue
  

})
function onInput() {
  emit("update:modelValue", componentValue.value)
 
}

</script>

<template>
  <select v-model="componentValue" @change="onInput">
    <option v-for="option in options" > {{ option }} </option>
  </select>
</template>
<style scoped></style>
