<script setup lang="ts">



import { defineProps, ref, watch } from 'vue';
const color = ref<string>('')

const props = defineProps<{
    gameStatus:string,
    winner:string|null,
}>()


watch(() => props.gameStatus, (gameStatusNewValue) => {
    if (gameStatusNewValue == "завершена") {
        color.value = 'green';
    }
    else if (gameStatusNewValue == 'ничья') {
        color.value = 'yellow'
    } else {
        color.value = ''
    }

})



</script>


<template>
    <div class="status">
        <p class="status-game">Статус игры: {{ gameStatus }}</p>
        <p class="status-win " :class="`status-win__${color}`">Победитель: {{ winner }}</p>
    </div>
</template>

<style scoped>
.status-game,
.status-win {
    color: rgb(101, 149, 211);
    padding: 5px;
    border-radius: 2px;
}

.status-win__green {
    color: rgb(85, 180, 85);
}

.status-win__yellow {
    color: rgb(175, 184, 61);
}
</style>