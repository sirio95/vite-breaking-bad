<script>

    export default{
        name: 'SingleCharacter',
        props: {
            'name' : String,
            'img' : String,
            'status' : String,
            'species': String,
            'id': Number, 
        },
    }   
</script>

<template>
    <div class="person" :class="id">
        <h3>{{name}}</h3>
        <img :src="img" :alt="name">
        <h4>{{species}}</h4>
        <p>{{status}}</p>
    </div>
</template>

<style>

</style>