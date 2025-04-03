<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  quotes: {
    type: Array,
  }
})

const ifListExist = computed(() => props.quotes.length > 0)

const emit = defineEmits(['showRandomQuote', 'delNewQuote'])

const generatorRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * props.quotes.length);
  return props.quotes[randomIndex];
}

</script>

<template>

  <ul class="quotes-list" v-if="ifListExist">
    <h2 class="quotes-list__header">List quotes</h2>
    <li class="quotes-list__item" v-for="quote in quotes" :key="quote.id">
      <div class="quotes-list__quote">
        <p class="quote__name"> {{ quote.quoteName }}</p>
        <span class="quote__author">{{ quote.authorName }}</span>
        <p>{{ key }}</p>
      </div>
      <button class="quote__button" @click="emit('delNewQuote', quote.key)">del</button>
    </li>
  </ul>
  <button v-if="ifListExist" class="quotes-list__button" @click="emit('showRandomQuote', generatorRandomQuote())">show random
    quote</button>
</template>

<style scoped>
p {
  margin: 0;
}


.quotes-list {
  width: 400px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  padding: 15px;
  border-radius: 8px;

}
.quotes-list__quote {
  width: 85%;
  overflow: hidden;
}


.quotes-list__item {
  text-align: left;
  display: flex;
  column-gap: 5%;
  align-items: center;

}

.quotes-list__header {
  border-bottom: 1px solid;
}

.quotes-list__button {
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  font-size: 0.9em;
  background-color: rgb(218, 218, 218);
}

.quote__name {

  overflow-wrap: break-word;
  font-size: 1em;
  font-weight: bold;
}

.quote__author {

  font-size: 0.8em;

}

.quote__button {
  padding: 0;
  width: 10%;
  height: 30px;
  font-size: 0.8em;
  text-align: center;
}
</style>