import { reactive } from 'vue';



export const store = reactive({

    charactersList: [],

    apiURL: 'https://rickandmortyapi.com/api/character',

    titolo: 'Rick & Morty App',
})