<template>
  <div>
   <img :src="getAvatar(toDo)" class="card-img-top" style="width:200px;height:200px;"  :alt="toDo.nameToDo + ' ' +  toDo.datum">
   <div class="card-body">
     <h5 class="card-title">{{ toDo.nameToDo}}</h5>
     <p class="card-text" style="font-size: small">
       Die To-Do "{{ toDo.nameToDo }}" wurde am {{ toDo.datum }} erstellt.
     </p>
    <button class="btn btn-primary me-3" type="delete" @click.prevent="deleteToDo">Delete</button>
     <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
       <label class="form-check-label" for="flexCheckDefault">
         Aufgabe erledigt.
       </label>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'toDoCard',
  props: {
    toDo: {
      type: Object,
      required: true
    }
  },
  methods: {
    getAvatar (toDo) {
      if (toDo.typeTask === 'DAILYTASK') {
        return require('../assets/DailyTask.png')
      } else if (toDo.typeTask === 'PROGRAMMING') {
        return require('../assets/Programming.png')
      } else if (toDo.typeTask === 'WORK') {
        return require('../assets/Work.png')
      } else if (toDo.typeTask === 'SPORT') {
        return require('../assets/Sport.png')
      }
    },
    deleteToDo () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/toDos/' + this.toDo.id
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>

</style>
