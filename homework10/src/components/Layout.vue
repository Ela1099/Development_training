<script setup lang="ts">
import SearchComponent from '../components/SearchComponent.vue';
import FiltrComponent from '../components/FiltrComponent.vue';
import BookList from './BookList.vue';

import { useCartStore } from '../stores/cart.store';
import { storeToRefs } from 'pinia';

import { ref } from 'vue';
import { BOOKS, type Book } from '../type';

const books = ref<Book[]>(BOOKS)
const allBooks = ref<Book[]>(BOOKS) 

const cartStore = useCartStore()
const { cartItemsCount } = storeToRefs(cartStore)


function getFiltrList(filterBookList: Book[]) {
  books.value = filterBookList
  console.warn(books.value)

}



</script>

<template>
  <div>
    <header class="lib__header">
      <div class="header__title">
      <p class="cart" >Библиотека</p>
      <p class="cart-link"><RouterLink to="/cart">Корзина:
      </RouterLink>
    {{ cartItemsCount }} книг</p>
  </div>
    <div class="header__search"><SearchComponent /></div>
    </header>
    
    <main class="lib__main">
      <div class="books-list">
        <BookList :books="books"></BookList>
      </div>
      <aside class="books-filer">
      <FiltrComponent :book="allBooks" @updateListBooks="getFiltrList" />
      <img class="picture" src="/src/assets/полка с книгами.jpg" alt="полка с книгами">
    </aside>
    </main>
  </div>
</template>

<style scoped>
*{
  box-sizing: border-box;
}
p,
ul,
li {
  margin: 0;
  padding: 0;
}
a{
  color: black;
}

.header {
  display: flex;
  justify-content: space-between;
  gap: 400px;
  width: 100%;
  
}

.header__title{
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  font-weight: bold;
}

.header__title>p{
  border-radius:8px ;
  padding: 8px;
  
  border: 1px solid rgba(197, 170, 139, 0.8); 
}

.lib__main {
  justify-content: center;
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  display:grid;
  grid-template-columns: 80% 20%;
  background-color: rgba(197, 170, 139, 0.8);
  border-radius:8px ;

}

.books-list{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.books-filer{
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 8px;
  padding: 10px;

}
.picture{
  margin-top: 20px;
  object-fit: cover;
  object-position: center;
  height: 740px;
  border-radius: 8px;
  opacity: 0.6;
  width:100% ;
}
</style>