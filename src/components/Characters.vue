<script>
import store from '../store.js';
import SingleCharacter from './SingleCharacter.vue';

export default{
    name: 'Characters',
    data(){
        return{
            store,
        }
    },
    components:{
        SingleCharacter
    }

    
}
</script>

<template>
    <div class="container">
        <div class="row">
            <SingleCharacter v-for="(character, index) in store.charactersList" :key="index" 
            :img="character.image"
            :name="character.name"
            :status="character.status"
            :species="character.species"
            :id="character.id"
            />
        </div>
    </div>
</template>

<style lang="sass">

</style>