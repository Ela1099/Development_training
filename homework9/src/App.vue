<script setup>


import CardsComponent from './components/CardsComponent.vue';
</script>



<template>
  <div class="product-list">
    <CardsComponent title="Книга" image="">
      <p>Захватывающий роман о приключениях!</p>
      <p>Сенсационное издание</p>
      <p>Скидка 30%</p>
      <p>Успей приобрести!</p>
    </CardsComponent>

    <CardsComponent title="Игрушка" image="">
      <p>Развивающая игрушка для детей.</p>
      <p>Безопасные материалы.</p>
    </CardsComponent>

    <CardsComponent title="Телефон" image="">
      <!-- Для телефона можно оставить описание по умолчанию -->
    </CardsComponent>
  </div>

</template>



<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;


}

.shadow {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 16px;
  background-image: linear-gradient(180deg, #a2a4ac80, #ffffff0d);
  z-index: 1;
}
</style>
