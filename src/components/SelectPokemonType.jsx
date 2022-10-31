import { useContext } from "react";
import FilterContext from "../context/FilterContext";
import types from "../utils/pokemon-types";

const SelectPokemonType = () => {
  const { setPokemonCategory } = useContext(FilterContext);
  return (
    <select
      onChange={(e) => setPokemonCategory(e.target.value)}
      className="w-full border-4 border-zinc-900 py-1.5 px-2 text-sm capitalize focus:outline-none"
    >
      <option value="---">Select a type</option>
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
