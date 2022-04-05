<template>
    <div class="airport">
        <form action="">
            <p>{Create New To Do List}</p>
        <label for="Title">Title <br/></label><input class='form' type="text" name="Title" id="Title"><br/>
        <label for="Description">Description <br/></label><input class='form' type="text" name="Description" id="Description"><br/>
        <label for="Priority">Priority <br/></label><input class='form' type="text" name="Priority" id="Priority"><br/>
        <!-- <button> Create </button>     -->
    </form>
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