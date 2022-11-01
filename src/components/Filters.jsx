import { useContext, useRef } from "react";
import FilterContext from "../context/FilterContext";
import { FaSearch } from "react-icons/fa";
import Button from "./Button";
import SelectPokemonType from "./SelectPokemonType";

const Filters = ({ fetchPokemons, setPokemonNotFound, pokemonCategoryAll }) => {
  const { openFilters, setPokemonName } = useContext(FilterContext);
  const pokemonNameRef = useRef();

  const handleOnChange = () => {
    if (pokemonNameRef.current.value === "") {
      setPokemonNotFound(false);
      fetchPokemons();
    }
  };
  return (
    <>
      <div
        className={`${
          !openFilters ? "-translate-y-4" : "translate-y-[92px]"
        } transform space-y-2 px-2 transition md:mx-auto md:flex md:max-w-5xl md:gap-12 md:space-y-0`}
      >
        <div className="flex w-full">
          <input
            onChange={handleOnChange}
            onKeyDown={(e) => {
              if (e.key === "Enter")
                setPokemonName(pokemonNameRef.current.value.toLowerCase());
            }}
            ref={pokemonNameRef}
            type="search"
            placeholder="Pokemon name..."
            className="input-reset-style w-full border-4 border-zinc-900 py-1 px-2 placeholder:text-sm focus:outline-none"
          />
          <Button
            text={<FaSearch />}
            onClick={() => {
              setPokemonName(pokemonNameRef.current.value.toLowerCase());
            }}
          />
        </div>

        <SelectPokemonType />
      </div>
      <div className={`${openFilters ? "mt-32" : "mt-4 md:mt-16"}`}></div>
    </>
  );
};

export default Filters;
