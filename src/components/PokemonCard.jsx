const PokemonCard = ({ pokemon }) => {
  return (
    <div key={pokemon.id}>
      <div className="special-border mx-auto border-y-4 border-zinc-900">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="mx-auto h-52 w-52"
        />
      </div>

      <div className="mt-2 font-bold capitalize">{pokemon.name}</div>
      <div className="space-x-2">
        <p className="inline text-sm">Type:</p>
        {pokemon.types.map((type) => (
          <p
            key={`${pokemon.name}-${type.type.name}`}
            className="inline-block text-xs capitalize text-zinc-500"
          >
            {type.type.name}
          </p>
        ))}
      </div>
      <div>
        <p className="inline text-sm">HP:</p>
        <div className="inline text-sm text-zinc-500">
          {pokemon.stats[0].base_stat}
        </div>
      </div>
      <div>
        <p className="inline text-sm">DMG:</p>
        <div className="inline text-sm text-zinc-500">
          {pokemon.stats[1].base_stat}
        </div>
      </div>
      <button className="push-button mx-auto mt-4 block border-y-4 border-zinc-900 py-2 text-sm">
        Recruit
      </button>
    </div>
  );
};

export default PokemonCard;
