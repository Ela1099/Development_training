<script setup lang="ts">

</script>

<template>


<div class="conteiner">
    <RouterLink to="/">Go to home</RouterLink> 
    <RouterLink to="/login">Go to Login</RouterLink> 
    
</div>
  
  <RouterView/>
</template>

<style scoped>
.conteiner{
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
