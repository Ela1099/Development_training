<script setup lang="ts">
import { defineProps, ref, computed, defineEmits, watch } from 'vue';
import { type Book } from '../type';


const props = defineProps<{
  book: Book[];
}>();

const oldListBook = ref<Book[]>(props.book)

const selectAuthor = ref('')
const emit = defineEmits(['updateListBooks'])


const listAutor = computed(() => {
  const authors = Object.values(oldListBook.value).map(author => author.author)
  return [...new Set(authors)];
})


watch(
  () => selectAuthor.value, (newAuthor) => {
    if (newAuthor) {
      const filterBookList = props.book.filter(book => book.author === newAuthor)
      console.warn(filterBookList)
      emit('updateListBooks', filterBookList);

    } else {
      emit('updateListBooks', props.book);
    }


  }

);

</script>


<template>

  <h4 class="filtration__header">Фильтрация</h4>
  <label for="author-select">Автор</label>
  <select v-model="selectAuthor" name="author" id="author-select">
    <option value="">Все авторы</option>
    <option v-for="author in listAutor" :key="author">
      {{ author }}
    </option>

  </select>


</template>


<style scoped>
p,
ul,
li {
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  gap: 400px;
}

.main {
  width: 100%;
  display: flex;
  justify-content: space-between;

}

.product-list {

  display: flex;
  width: 90%;
  flex-wrap: wrap;


}

.filtration__list {
  display: flex;

  width: 100%;
  flex-direction: column;
  align-items: flex-start;

}

.filtratio__item {
  text-align: left;
  list-style: none;
}
</style>