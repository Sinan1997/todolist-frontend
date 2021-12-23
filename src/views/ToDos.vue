<template>
  <h1>Willkommen zu den to-Dos</h1>
  <div class="container-fluid">
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="toDo in toDos" :key="toDo.id">
      <div class="card h-100">
        <img :src="getAvatar(toDo)" class="card-img-top" :alt="toDo.nameToDo + ' ' +  toDo.datum">
        <div class="card-body">
          <h5 class="card-title">{{ toDo.nameToDo}}</h5>
          <p class="card-text">
            {{ toDos.nameToDo }} wurde am {{ toDo.datum }} erstellt und wurde {{ toDo.complete ? 'abgeschlossen' : 'noch nicht abgeschlossen' }}.
          </p>
     </div>
     </div>
    </div>
   </div>
  </div>
</template>

<script>

export default {
  name: 'toDos',
  data () {
    return {
      toDos: []
    }
  },
  methods: {
    getAvatar (toDo) {
      if (toDo.typeTask === 'DAILYTASK') {
        return require('../assets/DailyTask.png')
      } else if (toDo.typeTask === 'PROGRAMMING') {
        return require('../assets/Java.png')
      }
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('https://webtech-todolist.herokuapp.com/api/v1/toDos', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(toDo => {
        this.toDos.push(toDo)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
