<script setup lang="ts">

import { computed, ref } from 'vue';
import { BOOKS } from '../type';

import { useRouter } from 'vue-router';

const router = useRouter();
const value = ref('')

const getBookid = computed(() => {
    const book = BOOKS.find(item => item.name == value.value)
    return book ? book.id : undefined;
})

function searchBook() {
    if (getBookid.value != undefined) {
        router.push({ name: 'cardBook', params: { id: getBookid.value } })
    }
    else { router.replace('/noBook') }
}

const isDisabled = computed(() => value.value !== '');

</script>




<template>
    <div class="search">
        <input v-model="value" class="search__input" placeholder="Поиск по названию">
        <button :disabled="!isDisabled" class="search__button" @click="searchBook">Поиск</button>
    </div>
</template>


<style scoped>
.search {
    display: flex;
    gap: 10px;
}

.search__input {
    width: 1000%;
    padding: 4px;
    border-radius: 8px;
    border: 1px solid;

    border: 1px solid rgba(197, 170, 139, 0.8);
}

.search__button:hover {
    border: 1px solid rgba(197, 170, 139, 0.8);
    ;
}
</style>