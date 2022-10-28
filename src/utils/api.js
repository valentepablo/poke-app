const getPokemons = async (offset = 0) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`
  );
  const data = await response.json();
  return data;
};

const getPokemonData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { getPokemonData, getPokemons };
