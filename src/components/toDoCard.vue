<template>
   <img :src="getAvatar(toDo)" class="card-img-top" style="width:200px;height:200px;"  :alt="toDo.nameToDo + ' ' +  toDo.datum">
   <div class="card-body">
     <h5 class="card-title">{{ toDo.nameToDo}}</h5>
     <p class="card-text" style="font-size: small">
       Die To-Do "{{ toDo.nameToDo }}" wurde am {{ toDo.datum }} erstellt.
     </p>
     <div class="mb-3">
       <button class="btn btn-outline-danger me-3" type="button" @click="deleteToDo">Löschen</button>
    </div>
     <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
       <label class="form-check-label" for="flexCheckDefault">
         Erledigt
       </label>
     </div>
     <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
       Update
     </a>
     <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
       <div class="offcanvas-header">
         <h5 class="offcanvas-title" id="offcanvasExampleLabel">Update your To-Do</h5>
         <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
       </div>
       <div class ="offcanvas-body">
         <form class="text-start needs-validation" id="to-Dos-update-form" novalidate>
          <div class="mb-3">
           <label for="formGroupExampleInput" class="form-label">To-Do Name</label>
           <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Z.b. Müll wegwerfen.." v-model="nameToDo" required>
       <div class="valid-feedback">
         Bitte definieren Sie Ihre To-Do
       </div>
          </div>
           <div class="mb-3">
             <label for="formGroupExampleInput2" class="form-label">Datum</label>
             <input type="date" class="form-control" id="formGroupExampleInput2" v-model="datum" required>
             <div class="invalid-feedback">
               Bitte wählen Sie ein Datum aus.
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
             <button class="btn btn-primary me-3" type="submit" @click.prevent="updateToDo">Update</button>
             <button class="btn btn-danger" type="reset">Reset</button>
           </div>
       </form>
       </div>
     </div>
   </div>
</template>

<script>

export default {
  name: 'toDoCard',
  data () {
    return {
      toDos: []
    }
  },
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
        nameToDo: this.nameToDo,
        datum: this.datum,
        typeTask: this.typeTask
      })

      const requestOptions = {
        method: 'PUT',
        headers: headers,
        body: toDo,
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
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
.form-check{
  position: unset;
  bottom: 300px;
  right: 200px;
  padding: 10px 428px;
  border-radius: 10px;
}

</style>
