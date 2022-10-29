import { createContext, useState } from "react";

const TeamContext = createContext();

const TeamProvider = ({ children }) => {
  const [myTeam, setMyTeam] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const checkDuplicates = (pokemon) => {
    if (myTeam.some((element) => element.id === pokemon.id)) {
      setOpenModal(true);
      return true;
    }
  };

  const recruitPokemon = (pokemon) => {
    if (myTeam.length >= 6) return;
    if (checkDuplicates(pokemon)) return;
    const newRecruit = {
      name: pokemon.name,
      id: pokemon.id,
      image: pokemon.sprites.front_default,
      stats: {
        hp: pokemon.stats[0].base_stat,
        dmg: pokemon.stats[1].base_stat,
      },
      type: pokemon.types.map((type) => type.type.name),
    };

    setMyTeam([...myTeam, newRecruit]);
  };

  const data = { myTeam, setMyTeam, recruitPokemon, openModal, setOpenModal };
  return <TeamContext.Provider value={data}>{children}</TeamContext.Provider>;
};

export { TeamProvider };
export default TeamContext;
