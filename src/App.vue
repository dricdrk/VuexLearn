<template>
  <div>
    <new-to-do-list />
    <button>create ></button>
  </div>
  <div class="wrapper">
    <p>{{ $store.getters.fullName }}</p>
    <div v-for="airport in airports" :key="airport.abbreviation">
      <airport-card :airport="airport" @click="$store.dispatch('addToFavorites', airport)" />
    </div>
    <h2 v-if="$store.state.favorites.length">TO DO <p>{If you want remove one element on this list click it}</p></h2>
    <div v-for="airport in $store.state.favorites" :key="airport.abbreviation">
      <airport-card :airport="airport" @click="$store.dispatch('deleteToFavorites', airport)"/>
    </div>
  </div>
</template> 

<script> 
import { ref } from 'vue' 
import allAirports from '@/data/airports.js' 
import AirportCard from '@/components/AirportCard.vue' 
import NewToDoList from '@/components/NewToDoList.vue'
export default { 
  components: { 
    AirportCard,
    NewToDoList
  }, 
  setup() { 
    const airports = ref(allAirports) 
    return { 
      airports 
    } 
  } 
} 
</script>

<style> 
#app { 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale; 
  text-align: center; 
  color: #2c3e50; 
  margin-top: 60px; 
} 
.wrapper { 
  display: grid; 
  grid-template-columns: 4fr 4fr 4fr; 
  grid-column-gap: 1rem; 
  max-width: 960px; 
  margin: 0 auto; 
} 
p, h3 { 
  grid-column: span 3; 
} 
</style>
