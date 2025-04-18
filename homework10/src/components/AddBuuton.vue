<script setup lang="ts">
import {  defineProps} from 'vue';
import type { Book } from '../type';
import {useCartStore } from '../stores/cart.store'
import { storeToRefs } from 'pinia';

const cartStore = useCartStore()
const { addToCart,deleteFromCart } = cartStore
const { cart } = storeToRefs(cartStore)




defineProps<{
  book: Book;
}>();

</script>


<template>
     <button 
      v-if="cart[book.id]===undefined||cart[book.id].count==0"
      class="card__button" 
      @click="addToCart(book)"
     >
      В корзину
    </button> 
  <div  v-else>
      <button 
        class="card__button" 
        @click="deleteFromCart(book)"
      >
        Удалить из корзины {{ cart[book.id].count }} книг
      </button> 
      <button 
        class="card__button" 
      
      @click="addToCart(book)">+{{ cart[book.id].count }}
      </button> 
  </div>
</template>
<style scoped>
.card__button{
  text-align: center;
  padding: 10px;
  margin: 2px;
}

</style>