<template>
  <div class="home">
    <div class="col-md-4 col-xs-6">
   <img id="toDo logo" src="../assets/toDoDome.jpeg" >
  </div>
  </div>
  <div class="text">
  <HelloWorld msg="Willkommen auf der To-Do-List Website. Auf dieser Seite kannst du To-Dos erstellen, löschen und einen Pomodoro Timer benutzen."/>
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
<style scoped>
.home {
  position: fixed;
  bottom: 300px;
  right: 1500px;
  padding: 50px 15px;
  border-radius: 30px;
}
.text{
  position: fixed;
  bottom: 470px;
  right: -300px;
  padding: 0px 550px;
  border-radius: 30px;
}
</style>
