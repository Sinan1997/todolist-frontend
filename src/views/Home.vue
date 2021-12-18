<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Willkommen auf deiner To-Do List. Auf dieser Seite kannst du To-Dos erstellen, abhaken oder löschen"/>
  </div>
</template>
<h1>Willkommen auf deiner <span class="badge bg-secondary">To-Do Liste</span></h1>

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
