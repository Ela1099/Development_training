<script setup lang="ts">


import type { Book } from '../type';
  
import BookItem from './BookItem.vue';


  
 defineProps<{
  books: Book[];
}>();

</script>

<template>
  <BookItem  :book="book"  v-for="book in books" :key="book.id"/>    

</template>



<style scoped>





</style>