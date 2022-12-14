import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons, loading, pokemonNotFound }) => {
  return (
    <div
      className={`mx-auto mb-4 grid max-w-5xl gap-12 md:grid-cols-3 md:gap-y-20 ${
        pokemonNotFound && "text-center md:grid-cols-1"
      }`}
    >
      {loading ? (
        <p className="md:col-span-3 md:text-center">Loading Pokemons...</p>
      ) : pokemonNotFound ? (
        "Pokemon not found."
      ) : (
        pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })
      )}
    </div>
  );
};

export default PokemonList;
