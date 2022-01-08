<template>
   <img :src="getAvatar(toDo)" class="card-img-top" style="width:200px;height:200px;"  :alt="toDo.nameToDo + ' ' +  toDo.datum">
   <div class="card-body">
     <h5 class="card-title">{{ toDo.nameToDo}}</h5>
     <p class="card-text" style="font-size: small">
       Die To-Do "{{ toDo.nameToDo }}" wurde am {{ toDo.datum }} erstellt.
     </p>
     <div class="mt-1">
       <button class="btn btn-outline-danger me-3" type="button" @click.prevent="deleteToDo">Löschen</button>
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
    },
    updateToDo () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/toDos/' + this.toDo.id
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const toDo = JSON.stringify({
        nameToDo2: this.nameToDo2,
        datum2: this.datum2,
        typeTask2: this.typeTask2
      })

      const requestOptions = {
        method: 'PUT',
        headers: Headers,
        body: toDo,
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
.form-check{
  position: fixed;
  bottom: 390px;
  right: 840px;
  padding: 70px 570px;
  border-radius: 10px;
}

</style>
