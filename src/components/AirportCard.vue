<template>
  <div class="airport">
     <p>{{ airport.Title }}</p>
    <p>{{ airport.Description }}</p>
    <p>{{ airport.Priority }}</p>
  </div>
</template>

<script>
export default { 
    props: { 
        airport: { 
            type: Object, required: true 
        } 
    } 
} 
</script>

<style scoped>
.airport {
    border: 3px solid;
    border-radius: .5rem; 
    padding: 1rem; 
    margin-bottom: 1rem;
} 
.airport p:first-child { 
    font-weight: bold; 
    font-size: 1.5rem; 
    margin: 1rem 0; 
} 
.airport p:last-child { 
    font-style: italic; 
    font-size: .8rem; 
} 
</style>
