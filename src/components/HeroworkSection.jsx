import "../styles/HeroworkSection.css";
import groupImage from "../assets/image1.png";
import data from "../utils.json";

export default function HeroSection() {
  const { heroSection } = data;

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="text1">
            {heroSection.title.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h1>

          <p>
            {heroSection.subtitle.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>

          <div className="hero-buttons">
            {heroSection.buttons.map((btn, i) => (
              <button
                key={i}
                className={
                  btn.type === "primary" ? "btn-primary" : "btn-secondary"
                }
              >
                {btn.text}
              </button>
            ))}
          </div>

          <div className="hero-stats">
            {heroSection.stats.map((stat, i) => (
              <div key={i}>
                <h2>{stat.value}</h2>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <img src={groupImage} alt="NFT Collection" />
        </div>
      </div>
    </section>
  );
}
