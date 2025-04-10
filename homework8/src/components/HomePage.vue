<script setup lang="ts">
const users=[{id:1, name:'first'},{id:2, name:'second'},{id:3, name:'third'}]
</script>

<template>
  <strong><p>Ты дома</p></strong>
  <button v-for="user in users" @click="$router.push({ path: `/user/${user.name}` })"> {{ user.id }}</button>
</template>

<style scoped>

</style>
