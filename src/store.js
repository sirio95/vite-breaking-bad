import { reactive } from 'vue';

const store = reactive({

    charactersList: [],

    apiURL: 'https://rickandmortyapi.com/api/character',

    titolo: 'Rick e Morty',
});

export default { store };