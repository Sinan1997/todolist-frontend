<template>
  <div class="home">
    <img src="../assets/ToDoList.png" class="rounded float-start" alt="Vue-Logo">
    <div>
    </div>
    <HelloWorld msg="Willkommen auf deiner To-Do List. Auf dieser Seite kannst du To-Dos erstellen, abhaken oder löschen"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
