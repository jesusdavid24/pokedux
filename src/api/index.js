import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

export const getPokemon = async () => {
  return axios
    .get(BASE_URL)
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
}; 

export const getPokemonDetails = (pokemon) => {
  return axios.get(pokemon.url)
    .then(res => res.data)
    .catch((err) => console.log(err));
};