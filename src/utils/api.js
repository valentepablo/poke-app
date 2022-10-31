const getPokemons = async (offset = 0) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`
  );
  const data = await response.json();
  return data;
};

const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Pokemon not found.");
    }
  } catch (error) {
    return { message: error };
  }
};

const getPokemonsByType = async (type) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await response.json();
  // console.log(data);
  return data;
};

export { getPokemonData, getPokemons, getPokemonsByType };
