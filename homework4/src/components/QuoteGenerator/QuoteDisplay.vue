<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  randomQuote: {
    type: Object,
  }
})

const ifRandomQuoteExist = computed(() => (Object.keys(props.randomQuote)).length == 0)
</script>

<template>
  <div v-if="!ifRandomQuoteExist" class="quote">
    <p class="quote__name"> {{ props.randomQuote.quoteName }}</p>
    <span class="quote__author">{{ props.randomQuote.authorName }}</span>
  </div>
</template>

<style scoped>
p {
  margin: 0;
}

.quote {
  text-align: left;
  margin-top: 20px;
  /* border: 1px solid; */
  padding: 15px;
  /* border-radius: 8px; */
}

.quote__name {
  overflow-wrap: break-word;
  font-size: 1em;
  font-weight: bold;
}

.quote__author {
  font-size: 0.8em;
}
</style>