<script setup>



import { defineProps, ref, watch } from 'vue';
const color = ref('')
const props = defineProps({
    gameStatus: {
        type: String,
    },
    winner: {
        type: String,
    },
})

watch(() => props.gameStatus, (gameStatusNewValue) => {
    if (gameStatusNewValue == `победа ${props.winner}`) {
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