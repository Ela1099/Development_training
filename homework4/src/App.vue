<script setup>
import QuoteForm from './components/QuoteGenerator/QuoteForm.vue';
import QuoteDisplay from './components/QuoteGenerator/QuoteDisplay.vue';
import Quotelist from './components/QuoteGenerator/QuoteList.vue';
import { ref} from 'vue';

const randomQuote = ref({})
const quotes = ref([])



function adddNewQuote(quote) {
  quotes.value.push(quote)

}
function show(aelectedQuote) {
  randomQuote.value = aelectedQuote;

}

function delQuote(id) {
  quotes.value.splice(id, 1)
}
</script>

<template>
  <main class="main">
    <h1 class="main__header">Quote generator</h1>
    <QuoteForm @newQuote="adddNewQuote" />
    <Quotelist :quotes="quotes" @showRandomQuote="show" @delNewQuote="delQuote" />
    <QuoteDisplay :randomQuote="randomQuote" />
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 15px;
  border-radius: 8px;
}
</style>
