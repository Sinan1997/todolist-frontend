<template>
  <h1>Willkommen zu den to-Dos</h1>
  <h5>Wenn du eine To-Do abgeschlossen hast, kannst du sie abhaken.</h5>
  <div class="container-fluid">
    <to-dos-card-list :toDos="this.toDos"></to-dos-card-list>
  </div>
  <to-dos-create-form @created="addToDo"></to-dos-create-form>
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
