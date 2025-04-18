<script setup lang="ts">
import BookItem from './BookItem.vue';
import { useCartStore } from '../stores/cart.store';
import { storeToRefs } from 'pinia';



const cartStore = useCartStore()
const { cartBooks, cart, cartItemsCount } = storeToRefs(cartStore)

</script>

<template>
  
<p class="cart" >Корзина</p>
  <header class="header">
    <button @click="$router.push('/')">назад</button>
    <button class="cart-clean" @click="cartStore.resetCart()">очистить</button>
  </header>

  <main class="main">
    <div class="books-list" v-if="cartItemsCount">
      <p v-for="book in cartBooks">
        <BookItem :book="book" v-if="cart[book.id].count != 0" />
      </p>
    </div>
    <div v-else>
    <p class="title" > Корзина пуста :с </p>
    <img src="/src/assets/sad-cat-30.gif" alt="" class="">
  </div>
  </main>

</template>


<style scoped>
h3 {
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
gap: 100px;
  width: 100%;
  margin-bottom: 10px;

}

.cart{
  border-radius:8px ;
  padding: 8px;
  
  border: 1px solid rgba(197, 170, 139, 0.8); 
}

.title {
  background-color: #ffffff;
  border-radius: 8px;
padding: 40px;
  border: 1px solid rgba(197, 170, 139, 0.8);;
}

.main {
  background-color: rgba(197, 170, 139, 0.8);
  border-radius: 8px;
}

.books-list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

button:hover {
  border-color: rgba(197, 170, 139, 0.8);

}
</style>