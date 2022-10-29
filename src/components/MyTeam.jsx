import { useContext } from "react";
import TeamContext from "../context/TeamContext";
import { RiSwordFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";

const MyTeam = () => {
  const { myTeam } = useContext(TeamContext);

  return (
    <div className="mt-20 mb-4 py-2">
      <p className="mb-4 px-4 text-sm">Recruits: {myTeam.length} / 5</p>
      <div className="mx-auto max-w-5xl space-y-2">
        {myTeam.map((pokemon) => (
          <div key={pokemon.id} className="flex items-center gap-4 pl-4">
            <div>
              <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div>
              <p className=" uppercase">{pokemon.name}</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <AiFillHeart className="h-5 w-5 text-green-700" />
                  <p className="text-sm">{pokemon.stats.hp}</p>
                </div>
                <div className="flex items-center gap-1">
                  <RiSwordFill className="h-5 w-5 text-red-700" />
                  <p className="text-sm">{pokemon.stats.dmg}</p>
                </div>
              </div>
              <div className="space-x-4">
                {pokemon.type.map((type) => (
                  <p
                    key={`${pokemon.id}-${type}`}
                    className="inline-block text-xs capitalize text-zinc-500"
                  >
                    {type}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTeam;
