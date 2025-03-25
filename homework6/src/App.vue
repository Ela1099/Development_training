<script setup>
import GameBoard from './components/Board/GameBoard.vue';
import GameControls from './components/GameControls.vue';
import GameStatus from './components/GameStatus.vue';
import { ref } from 'vue';


const winConditions = [
  [0, 1, 2], // Верхний ряд
  [3, 4, 5], // Средний ряд
  [6, 7, 8], // Нижний ряд
  [0, 3, 6], // Левый столбец
  [1, 4, 7], // Средний столбец
  [2, 5, 8], // Правый столбец
  [0, 4, 8], // Диагональ слева направо
  [2, 4, 6]  // Диагональ справа налево
];

const gameStatus = ref('не начата')
const winner = ref('не определен')
const cells = ref(Array(9).fill(null))
const curPlayer = ref(null)






function chuseCellValue(index) {
  gameStatus.value = 'игра идет';
  if (cells.value[index] == null) {
    cells.value[index] = curPlayer.value
    curPlayer.value = curPlayer.value === 'х' ? 'о' : 'х';
  }
  checkForWinOrDraw()





}
function rebutGame() {
  cells.value = Array(9).fill(null)
  curPlayer.value = null
  winner.value = 'не определен'
  gameStatus.value = 'не начата';
}




function checkForWinOrDraw() {
  let roundWon = false;
  let winningPlayer = null;

  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (cells.value[a] && cells.value[a] === cells.value[b] && cells.value[a] === cells.value[c]) {
      roundWon = true;
      winningPlayer = curPlayer.value === 'х' ? 'о' : 'х';

      break;
    }
  }
  if (roundWon) {
    winner.value = winningPlayer;
    gameStatus.value = `победа ${winner.value}`;
    return;
  }
  const roundDraw = !cells.value.includes(null);
  if (roundDraw) {
    gameStatus.value = 'ничья';
    winner.value = 'дружба'
    return;
  }

}

</script>


<template>
  <main class="game">
    <h1 class="game__header">Крестики-нолики</h1>
    <div class="game__content">
      <GameStatus :gameStatus="gameStatus" :winner="winner" />
      <GameBoard :gameStatus="gameStatus" :cells="cells" @clickMain="chuseCellValue" />
      <GameControls v-model="curPlayer" @cleanGame="rebutGame" />
    </div>
  </main>

</template>

<style scoped>
.game__header {
  color: rgb(101, 149, 211);
}

.game__content {
  border: 1px solid rgb(101, 149, 211);
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
