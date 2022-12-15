<script>
import SingleCharacter from './SingleCharacter.vue';
import {store} from '../store.js';

export default{
    name: 'Characters',
    components:{
        SingleCharacter
    },
    data(){
        return{
            store,
        }
    }

    
}
</script>

<template>
    <div class="container">
        <div class="row">
            <SingleCharacter v-for="(character, index) in store.charactersList" :key="index" 
            :img= "character.image"
            :name= "character.name"
            :status= "character.status"
            :species= "character.species"
            :id= "character.id"
            />
        </div>
    </div>
</template>

<style lang="scss">
    .container{
        width:1028px;
        height: 500px;
    }
</style>