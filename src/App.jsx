import { useState, useEffect } from "react";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import { getPokemons, getPokemonData } from "./utils/api";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    const pokemons = await getPokemons();
    const promises = pokemons.results.map(
      async (pokemon) => await getPokemonData(pokemon.url)
    );
    const results = await Promise.all(promises);
    setPokemons(results);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Header />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
