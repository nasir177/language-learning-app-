import './HeroSection.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <img src="/torigate.jpg" alt="Mount Fuji" className="bg-image" />
      <div className="hero-content">
        <div className="buttons">
          <button className="primary-btn" onClick={() => navigate('/hiragana')}>
            Get started
          </button>
          <button className="secondary-btn">I already had an account</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
