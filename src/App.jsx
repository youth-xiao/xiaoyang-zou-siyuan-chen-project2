import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import RulesPage from './components/RulesPage'; // Component for the game rules
import './App.css'
import GamePageRow from './components/GamePageRow';

const App = () => {
  return (
    <Router>
      <Layout>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rules" element={<RulesPage />} />
      {/* Add a new route for the "Normal" game under the "/game/normal" path */}
      <Route path="/game/normal" element={<GamePageRow difficulty="normal" />} />
      {/* Add a new route for the "Hard" game under the "/game/hard" path */}
      <Route path="/game/hard" element={<GamePageRow difficulty="hard" />} />
        </Routes>
      </Layout>
      {/* <div className="App">
      <GamePageRow />
    </div> */}
    </Router>
  );
};

export default App;
