import { useContext } from "react";
import TeamContext from "../context/TeamContext";
import { AiFillHeart } from "react-icons/ai";
import { RiSwordFill } from "react-icons/ri";
import TypeIcon from "./TypeIcon";

const PokemonCard = ({ pokemon }) => {
  const { recruitPokemon } = useContext(TeamContext);

  const handleOnClick = () => {
    recruitPokemon(pokemon);
  };

  return (
    <div key={pokemon.id}>
      <div className="special-border mx-auto border-y-4 border-zinc-900">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="mx-auto h-52 w-52"
        />
      </div>

      <div className="mt-2 font-bold capitalize">
        <p className="text-lg">{pokemon.name}</p>
        <div className="space-x-4">
          {pokemon.types.map((type) => (
            <div
              key={`${pokemon.name}-${type.type.name}`}
              className="inline-flex items-center gap-1 text-xs text-zinc-500"
            >
              <TypeIcon type={type.type.name} size="5" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center gap-6">
        <div className="flex items-center gap-1">
          <AiFillHeart className="h-5 w-5 text-green-700" />
          <div className="inline text-zinc-500">
            {pokemon.stats[0].base_stat}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <RiSwordFill className="h-5 w-5 text-red-700" />
          <div className="inline text-zinc-500">
            {pokemon.stats[1].base_stat}
          </div>
        </div>
      </div>
      <button
        onClick={handleOnClick}
        className="push-button width-calc mx-auto mt-4 block border-y-4 border-zinc-900 py-2 text-sm active:translate-y-1"
      >
        Recruit
      </button>
    </div>
  );
};

export default PokemonCard;
