<script setup lang="ts">

import Cellss from './Cellss.vue';
import { defineProps, defineEmits,computed } from 'vue';


const emit = defineEmits<{
    (e: 'clickMain', index: number): void;
}>()



const props = defineProps<{
    cells: (string|null)[],
    gameStatus: string
}>()



function clickUp(index:number) {
    emit('clickMain', index)

}

const disabled = computed(() => {
 
    return props.gameStatus === 'игра идет' ;
 
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
