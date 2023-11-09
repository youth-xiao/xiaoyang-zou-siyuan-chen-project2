import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import RulesPage from './components/RulesPage'; // Component for the game rules

const App = () => {
  return (
    <Router>
      <Layout>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rules" element={<RulesPage />} />
      </Routes>
      </Layout>
    </Router>
  );
};

export default App;
