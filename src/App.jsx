import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MyTeam from "./components/MyTeam";
import PokemonList from "./components/PokemonList";
import { TeamProvider } from "./context/TeamContext";
import { getPokemons, getPokemonData } from "./utils/api";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    const pokemons = await getPokemons(page);

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
    <TeamProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/myteam" element={<MyTeam />} />
            <Route
              path="/"
              element={
                <PokemonList
                  page={page}
                  setPage={setPage}
                  pokemons={pokemons}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </TeamProvider>
  );
}

export default App;
