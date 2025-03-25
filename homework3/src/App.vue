<script setup>
import { ref, watch, computed } from 'vue'


const tasks = ref([])
const name = ref('');
const descriptione = ref('');
const formValid = ref(false)

const expressionFirst = ref('')
const expressionSecond = ref('')
const selected = ref('+')


watch([name, descriptione], () => {
  formValid.value = name.value !== '' && descriptione.value !== '';
})

function addTask() {
  tasks.value.push({
    name: name.value,
    descriptione: descriptione.value

  })
  name.value = '';
  descriptione.value = '';
}


const count = computed(() => {
  const num1 = Number(expressionFirst.value);
  const num2 = Number(expressionSecond.value);
  if (isNaN(num1) || isNaN(num2)) {
    alert('введите корректное число');

  }

  switch (selected.value) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    case '/':
      return expressionSecond.value == 0 ? alert("на ноль делить нельзя") : num1 / num2;

  }

})
function clean() {
  expressionFirst.value = ''
  expressionSecond.value = ''
  count.value = ''
}

</script>

<template>
  <main class="main">
    <div class="Todolist">
      <form class="Todolist-form">
        <input v-model="name" class="form__input" type="text" placeholder="введите назание задачи">
        <input v-model="descriptione" class="form__input" type="text" placeholder="введите описание">
        <button class="form__button" :disabled="!formValid" @click="addTask">пуш</button>
      </form>
      <ul class="list">
        <h1 class="list__title">
            <p>id</p>
            <P>desc</p>
            <p>name</p>
          </h1>
        <li class="list__item" v-for="(task, index) in tasks">
          <p> {{ index + 1 }} </p>
          <p> {{ task.name }}</p>
          <p> {{ task.descriptione }}</p>
        </li>
      </ul>
    </div>

    <div class="calc">
      <form class="calc__form">
        <div class="calc__item">
          <input class="calc__input" v-model="expressionFirst" type="text" placeholder="0">
          <select class="calc__select" v-model="selected">
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
          </select>
          <input class="calc__input" v-model="expressionSecond" type="text" placeholder="0">
          <p class ='calc__mark'> =</p>
          <p class="calc__result">{{ count }}</p>
        </div>
        <button class="calc__button" @click="clean">del</button>
      </form>
    </div>
  </main>

</template>

<style scoped>
.main {
  display: flex;
  column-gap: 20px;

}

.Todolist {
  display: flex;
  flex-direction: column;

  border: 1px solid;
  border-radius: 8px;
  padding: 15px;
}

.form__input, .form__button {
  box-sizing: border-box;
  margin-bottom: 20px;
  font-size: 1em;
  padding: 0.6em 1.2em;
  border: 1px solid;
  border-radius: 8px;
  width: 100%;

}

.list {

  border: 1px solid;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.list__title {
  border-bottom: 1px solid;
  font-size: 1.5em;
  display: flex;
  column-gap: 30px;
  width: 100%;
  
}

.list__item {
  flex-wrap: nowrap;
  display: flex;
  width: 100%;
  column-gap: 30px;
}





.list__item>p, .list__title>p {
  width: 33%;
  font-size: 1.5em;
  margin: 5px;

  text-align: left;

}



.calc {
  height: 150px;
  font-size: 1em;
  border: 1px solid;
  border-radius: 8px;
  padding: 15px;

  width: 300px;
}

.calc__form {
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: column;

}

.calc__item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.calc__button {
  margin: 10px;

}

.calc__input {
  margin: 0 5px;

  box-sizing: border-box;

  font-size: 1em;
  padding: 0.6em 1.2em;
  border: 1px solid;
  border-radius: 8px;
  width: 100%;


}

.calc__result {

  padding: 0.6em 1.2em;

  border-radius: 8px;
  margin: 5px;
  font-size: 1em;
}

button {
  padding: 0;
}

select {
  padding: 0.6em 1.2em;
  border: none;
  border-radius: 8px;
  margin: 10px;

  appearance: none;
}
</style>
