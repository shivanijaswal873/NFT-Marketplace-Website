import "../styles/LogoworkSection.css";
import data from "../utils.json";

const logoMap = import.meta.glob("../assets/*", {
  eager: true,
  as: "url",
});

export default function Logo() {
  return (
    <section className="partners">
      <div className="partners-box">
        {data.logos.map(item => (
          <img
            key={item.id}
            src={logoMap[`../assets/${item.image}`] || item.image}
            alt={item.alt}
          />
        ))}
      </div>
    </section>
  );
}