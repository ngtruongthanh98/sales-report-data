import './App.scss';
// import HomePage from './pages/Home';
import SalesPage from './pages/Sales';
import AnalysisPage from './pages/Analysis';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<AnalysisPage />} />
          <Route path="/sale-person" element={<SalesPage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
