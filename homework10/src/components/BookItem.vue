<script setup lang="ts">
import {  defineProps} from 'vue';
import type { Book } from '../type';
import { useRouter } from 'vue-router';
import AddBuuton from './AddBuuton.vue';


const router = useRouter();



defineProps<{
  book: Book;
}>();
</script>

<template>

 
  <div class="card"  >
    
    <img :src="book.image" :alt="book.name" @click="router.push({ name: 'cardBook', params: { id: book.id } })">
    <div class="card__description">
      <p>Издательство
        <h4>{{ book.publish}}</h4>
      </p>
      <p>Название
        <h4>{{ book.name }}</h4>
      </p>
      <p>Автор
        <h4>{{ book.author }}</h4>
      </p>
            
    </div>
    <AddBuuton :book="book"></AddBuuton>
     </div>

    
    
    
</template>



<style scoped>

h5,p,h4{
  margin: 0;
  padding: 0;
}
.card {
  border: 1px solid white;
  padding: 10px;
margin: 5px;
  width: 300px;
  height: 260px;
  overflow: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 8px;
  justify-content: space-between;
  
}
.card__description{
  display: flex;
  gap: 2px;
  flex-direction: column;
  text-align: left;
  

}




</style>