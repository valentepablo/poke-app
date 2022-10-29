import bug from "../assets/bug.svg";
import dark from "../assets/dark.svg";
import dragon from "../assets/dragon.svg";
import electric from "../assets/electric.svg";
import fairy from "../assets/fairy.svg";
import fighting from "../assets/fighting.svg";
import fire from "../assets/fire.svg";
import flying from "../assets/flying.svg";
import ghost from "../assets/ghost.svg";
import grass from "../assets/grass.svg";
import ground from "../assets/ground.svg";
import ice from "../assets/ice.svg";
import normal from "../assets/normal.svg";
import poison from "../assets/poison.svg";
import psychic from "../assets/psychic.svg";
import rock from "../assets/rock.svg";
import steel from "../assets/steel.svg";
import water from "../assets/water.svg";

const TypeIcon = ({ type, size }) => {
  const types = [
    { name: "bug", icon: bug, color: "rgb(131,195,0)" },
    { name: "dark", icon: dark },
    { name: "dragon", icon: dragon },
    { name: "electric", icon: electric },
    { name: "fairy", icon: fairy },
    { name: "fighting", icon: fighting },
    { name: "fire", icon: fire, color: "rgb(255,151,65)" },
    { name: "flying", icon: flying },
    { name: "ghost", icon: ghost },
    { name: "grass", icon: grass, color: "rgb(56,191,75)" },
    { name: "ground", icon: ground },
    { name: "ice", icon: ice },
    { name: "normal", icon: normal },
    { name: "poison", icon: poison },
    { name: "psychic", icon: psychic },
    { name: "rock", icon: rock },
    { name: "steel", icon: steel },
    { name: "water", icon: water },
  ];

  const Icon = ({ type }) => {
    const iconIndex = types.find((item) => item.name === type).icon;
    return (
      <div className="flex items-center gap-1">
        <img src={iconIndex} alt={type} className={`h-${size} w-${size}`} />
        <div>{type}</div>
      </div>
    );
  };

  return <Icon type={type} />;
};

export default TypeIcon;
