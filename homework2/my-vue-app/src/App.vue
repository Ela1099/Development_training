<script setup>
import {ref} from 'vue'



const visible=ref(false);
const dateCreated = ref([])
const tasks = ref([])

function newTask() {
tasks.value.push({ message: "name"});
newDate();
}


function newDate(){
  let date= new Date();
  
  let year= date.getFullYear();
  let month= date.getMonth()+1;
  let day= date.getDate();

  return(
    dateCreated.value=`${day} ${month} ${year}`);

}

</script>

<template>
  <main class="main">
    
       <ul class="list">
          <li class="list__item" >
            <h1 class="list__title">
              <p>id</p>
              <P>created_at</p>
              <p>name</p>
            </h1>
        </li>
          <li class="list__item" v-for="(task, index) in tasks">
              <p> {{ index+1 }} </p>
              <p> {{ dateCreated}}</p>     
              <p> {{ task.message }}</p>
          </li>
       </ul>

    <div class="form"  v-show="visible" >
      <input class="form__input" type="text" name="name"  placeholder="введите задачу">
      <button class="form__button" @click="newTask">пуш</button>
    </div>
       <button class="list__button"  @click="visible=!visible">{{visible? 'Закрыть':'Добавить задачку'}}</button>

   
  </main>

</template>

<style scoped>
    
.main{
  display: flex;
  flex-direction: column;
}

.list{
  padding: 0;
  display: flex;
  flex-direction: column;
  
  border: 1px solid ;
  border-radius: 8px;
  padding: 0.6em 1.2em;

}

.list__title{
  border-bottom: 1px solid ;
}
.list__title,.list__item{
  display: flex;
  width: 100%;
  font-size: 1.5rem;

column-gap: 20px;
justify-content: center;
align-items: center;
 
}


.list__item>p, .list__title>p{
  flex-grow: 1;
}

.form__input{
  margin-bottom: 20px;
  font-size: 1rem;
  padding: 0.6em 1.2em;
  border: 1px solid ;
  border-radius: 8px;

  margin-right: 20px;
}
</style>
