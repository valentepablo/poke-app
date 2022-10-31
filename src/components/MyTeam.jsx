import { useContext } from "react";
import TeamContext from "../context/TeamContext";
import { RiSwordFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import TypeIcon from "./TypeIcon";

const MyTeam = () => {
  const { myTeam, removePokemon } = useContext(TeamContext);

  return (
    <div className="mx-auto mt-20 mb-4 py-2 md:max-w-5xl">
      <p className="mb-4 px-4 text-sm md:mt-4 md:text-center md:text-base">
        Recruits: {myTeam.length} / 6
      </p>
      <div className="grid place-items-center gap-4 px-2 md:mt-12 md:grid-cols-2 md:gap-8">
        {myTeam.map((pokemon) => (
          <div
            key={pokemon.id}
            className="special-border flex items-center gap-1 border-y-4 border-zinc-900 bg-white pl-1"
          >
            <div>
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="md:h-44 md:w-44"
              />
            </div>
            <div className="grow font-bold capitalize">
              <p className="uppercase md:text-lg">{pokemon.name}</p>
              <div className="flex gap-1 md:mt-2">
                {pokemon.type.map((type) => (
                  <div
                    key={`${pokemon.id}-${type}`}
                    className="text-xs text-zinc-500"
                  >
                    <TypeIcon type={type} size="5" />
                  </div>
                ))}
              </div>
              <div className="mt-2 flex items-center gap-3">
                <div className="flex items-center gap-1 ">
                  <AiFillHeart className="h-5 w-5 text-green-700 md:h-7 md:w-7" />
                  <p className="text-sm md:text-lg">{pokemon.stats.hp}</p>
                </div>
                <div className="flex items-center gap-1">
                  <RiSwordFill className="h-5 w-5 text-red-700 md:h-7 md:w-7" />
                  <p className="text-sm md:text-lg">{pokemon.stats.dmg}</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => removePokemon(pokemon)}
              className="self-start pr-2 pt-1 text-lg md:text-2xl"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTeam;
