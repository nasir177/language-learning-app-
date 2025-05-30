import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import HiraganaCharactersPage from './components/HiraganaCharactersPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/hiragana" element={<HiraganaCharactersPage />} />
      </Routes>
    </Router>
  );
}

export default App;