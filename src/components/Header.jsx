import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 border-b-4 border-zinc-900 bg-white p-4 md:mb-4 ">
      <div className="mx-auto flex items-center justify-between md:max-w-5xl">
        <Link to="pokemons">
          <button>Pokemons</button>
        </Link>
        <Link to="myteam">
          <Button text="My Team" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
