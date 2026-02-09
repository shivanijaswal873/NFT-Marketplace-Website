import "../styles/AboutworkSection.css";
import aboutImg from "../assets/aboutUs.jpg";
import data from "../utils.json";

export default function AboutSection() {
  const { aboutSection } = data;

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-header">
          <h2>{aboutSection.title}</h2>
          <p>
            {aboutSection.subtitle.map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="about-content">
          <div className="about-image">
            <img src={aboutImg} alt="About NFT" />
          </div>

          <div className="about-text">
            <h3>{aboutSection.heading}</h3>
            <p>{aboutSection.description}</p>

            {aboutSection.showButton && (
              <button className="about-btn">{aboutSection.buttonText}</button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
