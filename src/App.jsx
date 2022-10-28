import { useState, useEffect } from "react";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import { getPokemons, getPokemonData } from "./utils/api";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    const pokemons = await getPokemons(page);
    console.log(pokemons);

    const promises = pokemons.results.map(
      async (pokemon) => await getPokemonData(pokemon.url)
    );
    const results = await Promise.all(promises);
    setPokemons(results);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <div className="App">
      <Header />
      {loading ? (
        "Loading Pokemons..."
      ) : (
        <PokemonList page={page} setPage={setPage} pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
