import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon, getPokemonDetails } from '../api';
import { setLoading } from './uiSlice';


const initialState = {
  pokemons: [],
  searchTerm: '',
}

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonsRes = await getPokemon();
    const pokemonDetailed = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
    );
    
    dispatch(setPokemons(pokemonDetailed));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;
        
        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
   },
});

export const { 
  setFavorite, 
  setPokemons, 
  setSearchTerm,
} = dataSlice.actions;

export default dataSlice.reducer;