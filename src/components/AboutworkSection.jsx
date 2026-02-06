import "../styles/AboutworkSection.css";
import aboutImg from "../assets/aboutUs.jpg";

export default function AboutSection() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-header">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit.
          </p>
        </div>
        <div className="about-content">
          <div className="about-image">
            <img src={aboutImg} alt="About NFT" />
          </div>

          <div className="about-text">
            <h3>Get Popular NFT</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar.
            </p>
            <button className="about-btn">Show more</button>
          </div>
        </div>
      </div>
    </section>
  );
}
