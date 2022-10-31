const SearchPokemonInput = ({ handleOnChange, setPokemonName }) => {
  return (
    <input
      onChange={handleOnChange}
      onKeyDown={(e) => {
        if (e.key === "Enter") setPokemonName(pokemonName.current.value);
      }}
      ref={pokemonName}
      type="search"
      placeholder="Pokemon name..."
      className="w-full border-4 border-zinc-900 py-1 px-2 placeholder:text-sm focus:outline-none"
    />
  );
};

export default SearchPokemonInput;
