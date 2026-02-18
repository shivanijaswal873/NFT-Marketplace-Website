import "../styles/Footer.css";
import data from "../utils.json";
import { FaYoutube, FaDiscord, FaInstagram } from "react-icons/fa";

const socialIcons = {
  youtube: <FaYoutube />,
  discord: <FaDiscord />,
  instagram: <FaInstagram />,
};

export default function Footer() {
  const { brand, sections, contact, copyright } = data;

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">

          <div className="footer-brand">
            <h3 className="logo">Psycho<span>Art</span></h3>
            <p className="description">{brand.description}</p>
          </div>

          {sections.map((section, index) => (
            <div
              key={index}
              className={`footer-col ${section.title.toLowerCase() === "abouts"
                ? "abouts"
                : section.title.toLowerCase() === "company"
                  ? "company"
                  : ""
                }`}
            >
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-col contact">
            <h4>Contact</h4>

            <p>
              <a href={`tel:${contact.phone}`} className="contact-link">
                {contact.phone}
              </a>
            </p>

            <p>
              <a href={`mailto:${contact.email}`} className="contact-link">
                {contact.email}
              </a>
            </p>

            <div className="socials">
              {contact.socials.map((icon, i) => (
                <a href="#" key={i} className="social-icon">
                  {socialIcons[icon]}
                </a>
              ))}

            </div>
          </div>

        </div>
        <div className="footer-bottom">{copyright}</div>
      </div>
    </footer>

  );
}
