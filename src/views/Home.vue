<template>
  <div class="home">
    <img alt="toDo logo" src="../assets/ToDoList.png">
    <HelloWorld msg="Willkommen auf deiner To-Do List. Auf dieser Seite kannst du To-Dos erstellen, abhaken oder löschen"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/ToDoApp.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
