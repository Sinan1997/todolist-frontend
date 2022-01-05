<template>
  <div>
   <img :src="getAvatar(toDo)" class="card-img-top" style="width:200px;height:200px;"  :alt="toDo.nameToDo + ' ' +  toDo.datum">
    <button type="button" class="btn-close" aria-label="Close"></button>
   <div class="card-body">
     <h5 class="card-title">{{ toDo.nameToDo}}</h5>
     <p class="card-text" style="font-size: small">
       Die To-Do "{{ toDo.nameToDo }}" wurde am {{ toDo.datum }} erstellt.
     </p>
     <button type="button" class="btn-close" aria-label="Close" style="width:30px;height:30px;">
     </button>
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
    }
  }
}
</script>

<style scoped>

</style>
