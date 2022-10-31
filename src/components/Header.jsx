import Button from "./Button";
import { Link } from "react-router-dom";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { useContext } from "react";
import FilterContext from "../context/FilterContext";

const Header = () => {
  const { openFilters, setOpenFilters } = useContext(FilterContext);
  return (
    <header className="fixed top-0 left-0 right-0 z-10 border-b-4 border-zinc-900 bg-white p-4 md:mb-4">
      <div className="mx-auto flex items-center justify-between gap-1 md:max-w-5xl">
        <div className="space-x-4">
          <Link to="/">
            <button>Pokemons</button>
          </Link>

          <button onClick={() => setOpenFilters(!openFilters)}>
            {openFilters ? <GoTriangleUp /> : <GoTriangleDown />}
          </button>
        </div>

        <Link to="myteam">
          <Button text="MyTeam" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
