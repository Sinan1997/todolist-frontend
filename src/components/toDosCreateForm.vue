<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#toDos-create-offcanvas"
          aria-controls="#toDos-create-offcanvas">
    <img src="../assets/add.png" style="width:25px;height:25px;" >
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="toDos-create-offcanvas" aria-labelledby="offcanvas-label">
  <div class="offcanvas-header">
    <h5 id="offcanvas-label">New toDo</h5>
    <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <form class="text-start needs-validation" id="to-Dos-create-form" novalidate>
      <div class="mb-3">
        <label for="nameToDo" class="form-label">To Do Name</label>
        <input type="text" class="form-control" id="nameToDo" v-model="nameToDo" required>
        <div class="invalid-feedback">
          Bitte definieren sie ihre To Do.
        </div>
      </div>
      <div class="mb-3">
        <label for="datum" class="form-label">Datum</label>
        <input type="text" class="form-control" id="datum" v-model="datum" required>
        <div class="invalid-feedback">
          Bitte geben sie ein Datum ein.
        </div>
      </div>
      <div class="mb-3">
        <label for="typetask" class="form-label">ToDo-Typ</label>
        <select id="typetask" class="form-select" v-model="typeTask" required>
          <option value="" selected disabled>Wähle...</option>
          <option value="DAILYTASK">Dailytask</option>
          <option value="PROGRAMMING">Programming</option>
          <option value="WORK">Work</option>
          <option value="SPORT">Sport</option>
          <option value="SONSTIGES">Sonstiges</option>
        </select>
        <div class="invalid-feedback">
          Bitte wählen sie ein ToDo-Typ aus.
        </div>
      </div>
      <div v-if="this.serverValidationMessages">
        <ul>
          <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
            {{ message }}
          </li>
        </ul>
      </div>
      <div class="mt-5">
        <button class="btn btn-primary me-3" type="submit" @click.prevent="createToDo">Create</button>
        <button class="btn btn-danger" type="reset">Reset</button>
      </div>
    </form>
   </div>
  </div>
</template>

<script>
export default {
  name: 'ToDosCreateForm',
  data () {
    return {
      nameToDo: '',
      datum: '',
      typeTask: '',
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    async  createToDo () {
      if (this.validate()) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/toDos'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const toDo = JSON.stringify({
          nameToDo: this.nameToDo,
          datum: this.datum,
          typeTask: this.typeTask
        })

        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: toDo,
          redirect: 'follow'
        }

        const response = await fetch(endpoint, requestOptions)
        await this.handleResponse(response)
      }
    },
    async handleResponse (response) {
      if (response.ok) {
        this.$emit('created', response.headers.get('location'))
        document.getElementById('close-offcanvas').click()
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessages.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessages.push('Unknown error occurred')
      }
    },
    validate () {
      const form = document.getElementById('to-Dos-create-form')
      form.classList.add('was-validated')
      return form.checkValidity()
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
