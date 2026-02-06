import groupImage from "../assets/image1.png";
import "../styles/HeroworkSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="text1">
            Create, Sell & <br />
            Collect Your Own <br />
            Creative NFT
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Nunc vulputate libero et velit.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Explore Now</button>
            <button className="btn-secondary">Sell NFT</button>
          </div>

          <div className="hero-stats">
            <div>
              <h2>37k+</h2>
              <span>Artworks</span>
            </div>
            <div>
              <h2>20k+</h2>
              <span>Artists</span>
            </div>
            <div>
              <h2>99k+</h2>
              <span>Auctions</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src={groupImage} alt="NFT Collection" />
        </div>
      </div>
    </section>
  );
}
