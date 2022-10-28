import Pagination from "./Pagination";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons, page, setPage }) => {
  return (
    <div className="mb-8 p-2">
      <div className="mx-auto mb-4 grid max-w-5xl gap-12 md:grid-cols-3 md:gap-y-20">
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default PokemonList;
