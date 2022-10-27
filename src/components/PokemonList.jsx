import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="mx-auto mb-4 grid max-w-5xl gap-12 p-2 md:grid-cols-3 md:gap-y-20">
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default PokemonList;
