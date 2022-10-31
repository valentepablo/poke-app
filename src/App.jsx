import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MyTeam from "./components/MyTeam";
import PokemonListContainer from "./components/PokemonListContainer";
import { FilterProvider } from "./context/FilterContext";
import { TeamProvider } from "./context/TeamContext";

function App() {
  return (
    <TeamProvider>
      <Router>
        <div className="App">
          <FilterProvider>
            <Header />
            <Routes>
              <Route path="/myteam" element={<MyTeam />} />
              <Route path="/" element={<PokemonListContainer />} />
            </Routes>
          </FilterProvider>
        </div>
      </Router>
    </TeamProvider>
  );
}

export default App;
