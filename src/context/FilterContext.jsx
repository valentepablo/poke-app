import { useState, createContext } from "react";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [openFilters, setOpenFilters] = useState(false);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonCategory, setPokemonCategory] = useState("all");

  const data = {
    openFilters,
    setOpenFilters,
    setPokemonName,
    pokemonName,
    pokemonCategory,
    setPokemonCategory,
  };
  return (
    <FilterContext.Provider value={data}>{children}</FilterContext.Provider>
  );
};

export { FilterProvider };
export default FilterContext;
