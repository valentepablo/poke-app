import { useContext } from "react";
import FilterContext from "../context/FilterContext";
import types from "../utils/pokemon-types";

const SelectPokemonType = () => {
  const { setPokemonCategory, pokemonCategory } = useContext(FilterContext);
  return (
    <select
      value={pokemonCategory}
      onChange={(e) => setPokemonCategory(e.target.value)}
      className="input-reset-style w-full border-4 border-zinc-900 py-1.5 px-2 text-sm capitalize focus:outline-none"
    >
      <option value="all">All</option>
      {types.map((type) => {
        return (
          <option key={type.name} value={type.name} className="py-2">
            {type.name}
          </option>
        );
      })}
    </select>
  );
};

export default SelectPokemonType;
