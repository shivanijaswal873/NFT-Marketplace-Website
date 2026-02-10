import "./App.css";
import Page from "./pages/Page";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });

    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <Page />;
}

export default App;