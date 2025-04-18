<script setup lang="ts">

import { BOOKS,type Book } from '../type';

import {useCartStore } from '../stores/cart.store'
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import AddBuuton from './AddBuuton.vue';



const cartStore = useCartStore()

const { cartItemsCount } = storeToRefs(cartStore)







const props = defineProps<{
  id: {
    type: Number          //консоль алярмит про переданные тип, что-то не так, но что?...
   
  },
}>();

const bookId = computed(() => props.id);

const book = computed<Book | undefined>(() => {
  return BOOKS.find((book) => book.id === Number( bookId.value));
});


</script>

<template v-if="book">
  <p class="title">Книга #{{ bookId }}</p>
     <header class="header">
      <div class="header__title">
        <button class="back" @click="$router.back()">назад</button>
      
      
      <p  class="cart-link" @click="$router.push('/cart')">Книг в корзине: {{ cartItemsCount }}</p>
    </div>
    </header>
 <main>
 <div v-if="book" class="card" >
    
    <img :src="book.image" :alt="book.name">
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
    <AddBuuton :book="book"/>

 </div>
</main>

</template>



<style scoped>
h5,p,h4{
  margin: 0;
  padding: 0;
}

.main{
  width: 100%;
}
.header{

  display: flex;
 
}
.title{
  border-radius:8px ;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid rgba(197, 170, 139, 0.8); 
}

.header__title{
  align-items: center;
  display: flex;
  gap: 100px;
  justify-content: space-between;
  margin-bottom: 30px;
  font-weight: bold;
}

.header__title>p{
  border-radius:8px ;
  padding: 8px;
  
  border: 1px solid rgba(197, 170, 139, 0.8); 
}
.card {
  border: 1px solid #ccc;
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
  align-items: flex-start;
}
.card__description{
  display: flex;
  gap: 2px;
  flex-direction: column;
  text-align: left;

}




</style>