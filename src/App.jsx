import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import RulesPage from './components/RulesPage'; // Component for the game rules
import './App.css'
import GamePageMatrix from './components/GamePageMatrix';

const App = () => {
  return (
    <Router>
      <Layout>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rules" element={<RulesPage />} />
      {/* Add a new route for the "Normal" game under the "/game/normal" path */}
      <Route path="/game/normal" element={<GamePageMatrix difficulty="normal" numRows={6} wordLength={5}/>} />
      {/* Add a new route for the "Hard" game under the "/game/hard" path */}
      <Route path="/game/hard" element={<GamePageMatrix difficulty="hard" numRows={5} wordLength={7}/>} />
        </Routes>
      </Layout>
      {/* <div className="App">
      <GamePageRow />
    </div> */}
    </Router>
  );
};

export default App;
