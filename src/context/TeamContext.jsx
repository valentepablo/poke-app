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

  const checkTeamLength = () => {
    if (myTeam.length >= 6) {
      setOpenModal(true);
      return true;
    }
  };

  const recruitPokemon = (pokemon) => {
    if (checkDuplicates(pokemon)) return;
    if (checkTeamLength()) return;
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

  const removePokemon = (pokemon) => {
    const copy = [...myTeam];
    const filtered = copy.filter((item) => item.id !== pokemon.id);

    setMyTeam(filtered);
  };

  const data = {
    myTeam,
    setMyTeam,
    recruitPokemon,
    openModal,
    setOpenModal,
    removePokemon,
  };
  return <TeamContext.Provider value={data}>{children}</TeamContext.Provider>;
};

export { TeamProvider };
export default TeamContext;
