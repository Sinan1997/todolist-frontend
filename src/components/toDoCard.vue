<template>
  <div class="card h-50">
   <img :src="getAvatar(toDo)" class="card-img-top" :alt="toDo.nameToDo + ' ' +  toDo.datum">
   <div class="card-body">
     <h5 class="card-title">{{ toDo.nameToDo}}</h5>
     <p class="card-text">
       {{ toDos.nameToDo }} wurde am {{ toDo.datum }} erstellt und wurde {{ toDo.complete ? 'abgeschlossen' : 'noch nicht abgeschlossen' }}.
     </p>
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
