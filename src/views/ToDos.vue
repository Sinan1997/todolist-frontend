<template>
  <h1>Welcome to your To-Dos</h1>
  <div class="container-fluid">
     <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="toDos in toDos" :key="toDos.id">
      <div class="card h-100">
        <img :src="getAvatar(toDos)" class="card-img-top" :alt="toDos.nameToDo + ' ' +  toDos.datum">
        <div class="card-body">
          <h5 class="card-title">{{ toDos.nameToDo}}{{ toDos.datum}}</h5>
          <p class="card-text">
            {{ toDos.nameToDo }} {{ toDo.datum }} hat {{ toDo.list ? 'eine ToDo-Liste' : 'keine toDo-Liste' }} und hat {{ toDos.toDos.length}} Aufgaben abgerabeitet.
          </p>
        </div>
      </div>
     </div>
    </div>
  </div>
</template>

<script>
import { meta as toDos } from 'eslint-plugin-import/lib/rules/export'

export default {
  name: 'toDos',
  data () {
    return {
      toDos: []
    }
  },
  methods: {
    getAvatar () {
      if (toDos.type === 'DAILYTASK') {
        return require('../assets/DailyTask.png')
      } else if (toDos.type === 'PROGRAMMING') {
        return require('../assets/Java.png')
      }
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost8080/api/v1/toDos', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(toDos => {
        this.toDos.push(toDos)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
