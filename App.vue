<script setup>
import {ref} from "vue"


const count=ref(1)

function progress(e ){

  switch (e.target){
   case inc:
      count.value++;
      break;
    case dec:
      count.value--;
      break;
    case mult:
      count.value= count.value*10;
      break;
    case del:
      count.value= count.value/10;
      break;
  }
}
</script>



<template>
 <main>
  <h1>count: {{count}}</h1>

  <button id="inc" @click="progress">+</button>
  <button id="dec" @click="progress">-</button>
  <button id="mult"@click="progress">*</button>
  <button id="del" @click="progress">/</button>
 </main>
</template>

<style scoped>

</style>
