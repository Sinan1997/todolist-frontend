<template>
  <h1>Welcome to your To-Dos</h1>
  <div class="container-fluid">
     <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="person in persons" :key="person.id">
      <div class="card h-100">
        <img :src="getAvatar(person)" class="card-img-top" :alt="person.firstName + ' ' +  person.lastName">
        <div class="card-body">
          <h5 class="card-title">{{ person.firstName}}{{ person.lastName}}</h5>
          <p class="card-text">
            {{ person.firstName }} {{ person.lastName }} hat {{ person.list ? 'eine ToDo-Liste' : 'keine toDo-Liste' }} und hat {{ person.toDos.length}} Aufgaben abgerabeitet.
          </p>
        </div>
      </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Persons',
  data () {
    return {
      persons: []
    }
  },
  methods: {
    getAvatar (person) {
      if (person.gender === 'MALE') {
        return require('../assets/male.png')
      } else if (person.gender === 'FEMALE') {
        return require('../assets/female.png')
      }
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost3565', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(person => {
        this.persons.push(person)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
