import "../styles/FAQSection.css";
import { useState } from "react";

const faqs = [
  "Lorem ipsum ipsum ?",
  "Lorem ipsum ipsum ?",
  "Lorem ipsum ipsum ?",
  "Lorem ipsum ipsum ?",
  "Lorem ipsum ipsum ?",
  "Lorem ipsum ipsum ?",
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-bg">
      <div className="faq-box">
        <h2>
          Frequently Asked <br /> Question
        </h2>
        <p>Wanna Ask Something?</p>

        <div className="faq-grid">
          {faqs.map((item, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-row" onClick={() => toggleFAQ(index)}>
                <span className="faq-question">{item}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "_" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <div className="faq-answer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, explicabo, molestias deserunt officiis.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
