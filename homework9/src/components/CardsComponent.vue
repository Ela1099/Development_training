<script setup>
import { ref } from 'vue';

defineProps({
  title: String,
  image: String,
});


const shadow = ref(false)

function isShadow(event) {
  shadow.value = event.target.scrollTop > 0;
}
</script>

<template>
  <div class="card" :class="{ 'card-shadow': shadow }">
    <div class="card-wraper" @scroll="isShadow">
      <h2>{{ title }}</h2>
      <img :src="image" :alt="title">
      <div class="description">
        <slot>
          Описание отсутствует.
        </slot>
      </div>
      <button>Купить</button>
    </div>
  </div>
</template>



<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 300px;
  height: 260px;
  overflow: auto;
  position: relative;
}

.description {
  margin-top: 10px;

  display: flex;
  flex-direction: column;

}

.card-wraper {
  height: 260px;
  overflow: auto;
}

.card-shadow {
  position: relative
}

.card-shadow::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 16px;
  background-image: linear-gradient(180deg, #a2a4ac80, #ffffff0d);
}
</style>
