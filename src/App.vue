<script>
import AppHeader from './components/AppHeader.vue';
import Characters from './components/Characters.vue';
import SingleCharacter from './components/SingleCharacter.vue';
import store from './store.js';

export default{
  components: {
    Characters,
    SingleCharacter,
    AppHeader
  },
  data(){
    return{
      store,
    }
  },
  methods: {
        getCharacters(){
            axios
            .get(store.apiURL)
            .then((res) => {
                store.charactersList= res.data.results;
            })
            .catch(err => {
                console.log('errori', err);
            })
        },
        mounted(){
            this.getCharacters();
        }
    }
}
</script>

<template>
  <AppHeader/>
  <Characters/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
