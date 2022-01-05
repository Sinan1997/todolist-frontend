<template>
  <h1>Willkommen zu den to-Dos</h1>
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Informationen zur Nutzung
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Auf Dieser Seite haben Sie eine Übersicht von den erstellten To-Dos. Sie werden je nach Aufgabentyp angezeigt und bringen einige Funktionen mit sich. Dazu gehört das erstellen einer To-Do mit dem Button unten rechts. Außerdem haben Sie die Möglichkeit einzelne To-Dos zu löschen oder abzuhaken.
         </div>
        </div>
  <div class="container-fluid">
    <to-dos-card-list :toDos="this.toDos"></to-dos-card-list>
  </div>
  <to-dos-create-form @created="addToDo"></to-dos-create-form>
  </div>
    </div>
</template>

<script>
import toDosCardList from '../components/toDosCardList'
import toDosCreateForm from '../components/toDosCreateForm'

export default {
  name: 'toDos',
  components: {
    toDosCardList,
    toDosCreateForm
  },
  data () {
    return {
      toDos: []
    }
  },
  methods: {
    addToDo (toDoLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + toDoLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(toDo => this.toDos.push(toDo))
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/toDos'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
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
