<script setup>
import { ref, defineEmits, computed } from "vue";
const quoteName = ref('')
const authorName = ref('')
const id = ref(5)


const inputValue = "write..."
const emit = defineEmits(['newQuote'])

const isFormValid = computed(() => quoteName.value !== '' && authorName.value !== '')



function addQuote() {
    const quote = {
        quoteName: quoteName.value,
        authorName: authorName.value,
        id:id.value++
    };
    emit('newQuote', quote)

}

const clean = () => {
    quoteName.value = '';
    authorName.value = ''
}

</script>
<template>
    <form class="form-quote">
        <h2 class="form-quote__header">New quote</h2>
        <input type="text" v-model="quoteName" class="form-quote__input quote" :placeholder="inputValue">
        <input type="text" v-model="authorName" class="form-quote__input author" :placeholder="inputValue">
        <button type="button" class="form-quote__button" :disabled="!isFormValid" @click="addQuote">add</button>
        <button type="button" class="form-quote__button" @click="clean">clear inputs</button>
    </form>
</template>

<style scoped>
.form-quote {
    display: flex;
    flex-direction: column;

    row-gap: 10px;
}

.form-quote__input {
    box-sizing: border-box;
    border: 1px solid;
    padding: 5px;
    border-radius: 8px;

    width: 100%;

}

.form-quote__input.quote {
    height: 100px;
}

.form-quote__input.author {
    height: 30px;
}

.form-quote__button {
    box-sizing: border-box;
    width: 100%;
    padding: 5px;
    font-size: 0.9em;
    background-color: rgb(218, 218, 218);
}
</style>