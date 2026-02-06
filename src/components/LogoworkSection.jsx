import "../styles/LogoworkSection.css";
import data from "../utils.json";

export default function Logo() {
  return (
    <section className="partners">
      <div className="partners-box">
        {data.logos.map((item) => (
          <img
            key={item.id}
            src={new URL(`../assets/${item.image}`, import.meta.url).href}
            alt={item.alt}
          />
        ))}
      </div>
    </section>
  );
}