<script>
    import store from '../store.js';

    export default{
        name: 'AppHeader',
        data(){
            return{
                store,
            }
        }
    }
</script>

<template>
    <h1>{{store.title}}</h1>
</template>

<style>


</style>