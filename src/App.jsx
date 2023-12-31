import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import RulesPage from "./components/RulesPage"; // Component for the game rules
import "./App.css";
import GamePageMatrix from "./components/GamePageMatrix";
import { GameProvider } from "./context/GameContext"; // Import the GameProvider

const App = () => {
  return (
    <Router>
      <GameProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rules" element={<RulesPage />} />
            {/* Add a new route for the "Normal" game under the "/game/normal" path */}
            <Route
              path="/game/normal"
              element={
                <GamePageMatrix
                  key="normal-game"
                  difficulty="normal"
                  numRows={6}
                  wordLength={6}
                />
              }
            />
            {/* Add a new route for the "Hard" game under the "/game/hard" path */}
            <Route
              path="/game/hard"
              element={
                <GamePageMatrix
                  key="hard-game"
                  difficulty="hard"
                  numRows={5}
                  wordLength={7}
                />
              }
            />
          </Routes>
        </Layout>
      </GameProvider>

      {/* <div className="App">
      <GamePageRow />
    </div> */}
    </Router>
  );
};

export default App;
