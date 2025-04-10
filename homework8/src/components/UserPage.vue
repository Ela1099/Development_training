<script setup lang="ts">
import { useRouter } from 'vue-router';
const router=useRouter()


</script>

<template>
 <strong> <h1>Ты на странице:  {{ $route.params.name }}</h1></strong>
 <button @click="router.back()">назад</button>
 
</template>

<style scoped>

</style>
