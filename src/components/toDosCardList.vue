<template>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="toDo in toDos" :key="toDo.id">
      <to-do-card :toDo="toDo"></to-do-card>
    </div>
  </div>
</template>

<script>
import ToDoCard from '@/components/toDoCard'

export default {
  name: 'toDosCardList',
  components: {
    ToDoCard
  },
  props: {
    toDos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
