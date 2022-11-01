import { useState, useEffect, useContext } from "react";
import { getPokemons, getPokemonData, getPokemonsByType } from "../utils/api";
import FilterContext from "../context/FilterContext";
import PokemonList from "./PokemonList";
import Filters from "./Filters";
import Modal from "./Modal";
import Pagination from "./Pagination";

const PokemonListContainer = () => {
  const { pokemonName, pokemonCategory } = useContext(FilterContext);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonNotFound, setPokemonNotFound] = useState(false);
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

  const fetchPokemonsByType = async () => {
    setLoading(true);
    if (pokemonCategory === "all") {
      fetchPokemons();
    } else {
      const pokemons = await getPokemonsByType(pokemonCategory);
      const promises = pokemons.pokemon.map(
        async (pokemon) => await getPokemonData(pokemon.pokemon.url)
      );
      const results = await Promise.all(promises);
      setPokemons(results);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  useEffect(() => {
    fetchPokemonsByType();
  }, [pokemonCategory]);

  useEffect(() => {
    const fetchByName = async () => {
      setLoading(true);
      if (pokemonName !== "") {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
        const result = await getPokemonData(url);
        setLoading(false);

        if (result.hasOwnProperty("message")) {
          setPokemonNotFound(true);
        } else {
          setPokemonNotFound(false);
          setPokemons([result]);
        }
      }
    };

    if (pokemonName.length > 0) fetchByName();
  }, [pokemonName]);

  return (
    <>
      <Filters
        fetchPokemons={fetchPokemons}
        setPokemonNotFound={setPokemonNotFound}
      />

      <div className="mb-8 p-2">
        <PokemonList
          pokemons={pokemons}
          loading={loading}
          pokemonNotFound={pokemonNotFound}
        />
        <Modal />
        {pokemons.length > 1 && !loading && (
          <Pagination page={page} setPage={setPage} />
        )}
      </div>
    </>
  );
};

export default PokemonListContainer;
