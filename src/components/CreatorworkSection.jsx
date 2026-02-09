import "../styles/CreatorworkSection.css";
import data from "../utils.json";
import creator1 from "../assets/creator1.jpg";
import creator2 from "../assets/creator2.jpg";
import creator3 from "../assets/creator3.jpg";
import creator4 from "../assets/creator4.jpg";
import creator5 from "../assets/creator5.jpg";
import creator6 from "../assets/creator6.jpg";

const imageMap = {
  "creator1.jpg": creator1,
  "creator2.jpg": creator2,
  "creator3.jpg": creator3,
  "creator4.jpg": creator4,
  "creator5.jpg": creator5,
  "creator6.jpg": creator6,
};

export default function CreatorworkSection() {
  return (
    <section className="creator-section">
      <div className="creator-container">
        <div className="creator-header">
          <h2>{data.creatorTitle}</h2>
          <p>
            {data.creatorSubtitle.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>

        <div className="top-grid">
          {data.creators.map((item, i) => (
            <div
              className={`top-card ${item.followed ? "active" : ""}`}
              key={i}
            >
              <img src={imageMap[item.bg]} className="bg" />
              <img src={imageMap[item.user]} className="user" />

              <h3>{item.name}</h3>

              <p className="text">
                {data.creatorCardText.map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>

              <button className="btn">
                {item.followed ? "+ Followed" : "+ Follow"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
