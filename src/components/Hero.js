import hero from "../img/hero.jpeg";
import trendyol from "../img/trendyol.jpeg";
import hepsiburada from "../img/hepsiburada.png";

function Hero() {
  return (
    <div className="hero">
      <img src={hero} className="hero-img" alt="hero" />
      <div className="link-grid">
        <img src={trendyol} className="hero-link" alt="trendyol" />
        <img src={hepsiburada} className="hero-link" alt="trendyol" />
      </div>
    </div>
  );
}

export default Hero;
