import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import Searcher from './components/Searcher';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import PokemonList from './components/PokemonList';
import logo from './static/logo.svg';
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import './App.css';

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const searchTerm = useSelector((state) => state.data.searchTerm); 
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, [dispatch]);

  const filteredPokemons = searchTerm
    ? pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : pokemons;

    return (
      <div className="App">
        <Col span={4} offset={10}>
          <img src={logo} alt="Pokedux" />
        </Col>
        <Col span={8} offset={8}>
          <Searcher />
        </Col>
        {loading ? (
          <Col offset={12}>
            <Spin spinning size="large" />
          </Col>
        ) : (
          <>
            {searchTerm && filteredPokemons.length === 0 ? (
              <Col offset={12}>
                <p>No se encontro ningun Pokémon.</p>
              </Col>
            ) : (
              <PokemonList pokemons={filteredPokemons} />
            )}
          </>
        )}
      </div>
    );
}

export default App;
