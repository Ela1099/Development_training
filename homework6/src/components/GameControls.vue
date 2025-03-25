<script setup>

import { defineEmits, ref, watch } from 'vue';

const curPlayer = ref('')

const props = defineProps({
    modelValue: {
        type: String,
    }
})

const emit = defineEmits(['cleanGame', 'update:modelValue'])
const firstPlayer = ref(props.modelValue)

function rebut() {
    firstPlayer.value = null
    emit('cleanGame')
}

watch(() => props.modelValue, (newValue) => {
    curPlayer.value = newValue
}
)


function update() {
    emit("update:modelValue", firstPlayer.value)
}


</script>
<template>
    <div class="game-controler">
        <p>Введите первого игрока </p>
        <input class="conroller__input" v-model="firstPlayer" @input="update" placeholder="введите х или о на русском">

        <p class="controler__output">
            Ходит: игрок {{ curPlayer }}
        </p>

        <button class="controler__button" @click="rebut">Начать заново</button>
    </div>

</template>

<style scoped>
.game-controler {
    display: flex;
    flex-direction: column;

}

.conroller__input {
    border: 1px solid;
    box-shadow: 3px 4px 1px 2px rgba(1, 1, 1, 0.1);
    border-radius: 8px;
    padding: 15px;
}

.controler__button {
    border-radius: 8px;
    padding: 15px;
    background-color: rgb(101, 149, 211);
}
</style>
