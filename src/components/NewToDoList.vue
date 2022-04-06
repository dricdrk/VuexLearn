<template>
    <div class="airport">
        <div>
            <p>{Create New To Do List}</p>
        <label for="title">title <br/></label><input class='form' type="text" name="title" id="title"><br/>
        <label for="description">description <br/></label><input class='form' type="text" name="description" id="description"><br/>
        <label for="priority">priority <br/></label><input class='form' type="text" name="priority" id="priority"><br/>
        <button  @click="$store.dispatch('addToDoObject', airport)"> Create </button>    
    </div>
    </div>
</template>
<script>
export default { 
    props: { 
        NewToDoList: { 
            type: Object, required: true 
        }
    } 
} 
</script>
<style scoped>
.form{
    margin:0.4cm 0cm 0.4cm 0cm;
    
}
input{
    padding: 1.2rem 8rem;
}
.airport {
    border: 3px solid;
    border-radius: .5rem; 
    padding: 1rem; 
    margin-bottom: 1rem;
} 
.airport p:first-child { 
    font-weight: bold; 
    font-size: 2.5rem; 
    margin: 1rem 0; 
} 
.airport p:last-child { 
    font-style: italic; 
    font-size: .8rem; 
} 
</style>