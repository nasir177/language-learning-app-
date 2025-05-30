import { Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import HiraganaCharactersPage from './components/HiraganaCharactersPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/hiragana" element={<HiraganaCharactersPage />} />
    </Routes>
  );
}

export default App;