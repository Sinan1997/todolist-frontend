<template>
   <img :src="getAvatar(toDo)" class="card-img-top" style="width:200px;height:200px;"  :alt="toDo.nameToDo + ' ' +  toDo.datum">
   <div class="card-body">
     <h5 class="card-title">{{ toDo.nameToDo}}</h5>
     <p class="card-text" style="font-size: small">
       Die To-Do "{{ toDo.nameToDo }}" wurde am {{ toDo.datum }} erstellt.
     </p>
     <div class="mt-5">
       <button class="btn btn-outline-danger me-3" type="button" @click.prevent="deleteToDo">Delete</button>
<!--     <a class="btn btn-primary" data-bs-toggle="offcanvas"  href="#offcanvasExample" role="button" aria-controls="offcanvasExample">-->
<!--       Recreate-->
<!--     </a>-->
<!--     <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">-->
<!--       <div class="offcanvas-header">-->
<!--         <h5 class="offcanvas-title" id="offcanvasExampleLabel">Update your ToDo</h5>-->
<!--         <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>-->
<!--       </div>-->
<!--       <div class="offcanvas-body">-->
<!--         <form class="text-start needs-validation" id="to-Dos-create-form" novalidate>-->
<!--           <div class="mb-3">-->
<!--             <label for="nameToDo2" class="form-label">To Do Name</label>-->
<!--             <input type="text" class="form-control" id="nameToDo2" v-model="nameToDo2" required>-->
<!--             <div class="invalid-feedback">-->
<!--               Bitte definieren sie ihre To Do.-->
<!--             </div>-->
<!--           </div>-->
<!--           <div class="mb-3">-->
<!--             <label for="datum2" class="form-label">Datum</label>-->
<!--             <input type="text" class="form-control" id="datum2" v-model="datum2" required>-->
<!--             <div class="invalid-feedback">-->
<!--               Bitte geben sie ein Datum ein.-->
<!--             </div>-->
<!--           </div>-->
<!--           <div class="mb-3">-->
<!--             <label for="typetask2" class="form-label">ToDo-Typ</label>-->
<!--             <select id="typetask2" class="form-select" v-model="typeTask2" required>-->
<!--               <option value="" selected disabled>Wähle...</option>-->
<!--               <option value="DAILYTASK">Dailytask</option>-->
<!--               <option value="PROGRAMMING">Programming</option>-->
<!--               <option value="WORK">Work</option>-->
<!--               <option value="SPORT">Sport</option>-->
<!--               <option value="SONSTIGES">Sonstiges</option>-->
<!--             </select>-->
<!--             <div class="invalid-feedback">-->
<!--               Bitte wählen sie ein ToDo-Typ aus.-->
<!--             </div>-->
<!--           </div>-->
<!--           <div class="mt-5">-->
<!--             <button class="btn btn-primary me-3" type="update" @click.prevent="updateToDo">Update</button>-->
<!--             <button class="btn btn-danger" type="reset">Reset</button>-->
<!--           </div>-->
<!--         </form>-->
<!--       </div>-->
<!--     </div>-->
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

</style>
