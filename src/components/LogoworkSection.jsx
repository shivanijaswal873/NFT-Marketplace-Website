import "../styles/LogoworkSection.css";
import data from "../utils.json";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const logoMap = import.meta.glob("../assets/*", {
  eager: true,
  as: "url",
});

export default function Logo() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    drag: false,
    renderMode: "performance",
    slides: {
      perView: 4,
      spacing: 50,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 3 },
      },
      "(max-width: 768px)": {
        slides: { perView: 2 },
      },
    },
    created(slider) {
      slider.moveToIdx(0, true);

      const animation = { duration: 6000, easing: (t) => t }; 

      function move() {
        slider.moveToIdx(slider.track.details.abs + 1, true, animation);
      }

      slider.on("animationEnded", move);
      move();
    },
  });

  return (
    <section className="partners">
      <div ref={sliderRef} className="keen-slider">
        {data.logos.map((item) => (
          <div key={item.id} className="keen-slider__slide">
            <img
              src={logoMap[`../assets/${item.image}`] || item.image}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}