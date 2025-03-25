<script setup>
import Cellss from './Cellss.vue';

import { ref, defineProps, computed } from 'vue';

const cel = ref('')
const emit = defineEmits(['clickMain'])



const props = defineProps({
    cells: {
        type: Array,
    },
    gameStatus: {
        type: String
    },

})



function clickUp(index) {
    emit('clickMain', index)

}

const disabled = computed(() => {
    return props.gameStatus == 'игра идет' || props.gameStatus == 'не начата';
})

</script>

<template>
    <div class="cells__cell">
        <div class="cell">
            <Cellss :disabled="!disabled" v-for="(cel, index) in cells" :cel="cel" :index="index" @clicks="clickUp" />
        </div>

    </div>

</template>

<style scoped>
.cell {
    display: flex;
    flex-wrap: wrap;
    width: 180px;
    height: 180px;
    gap: 3px;
    justify-content: center;

}
</style>
