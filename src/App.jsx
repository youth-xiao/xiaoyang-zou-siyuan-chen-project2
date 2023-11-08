import './App.css';
import { CardDataProvider } from './components/CardDataContext';
import Card from './components/Card';

function App() {
    return (
        <div className="App">
          <CardDataProvider>
              <Card />
          </CardDataProvider>
        </div>
    );
}

export default App;
