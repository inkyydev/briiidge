import { useEffect, useState } from "react";
import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  const mq = window.matchMedia(`(max-width: 767px)`);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");

    const update = () => setIsMobile(mq.matches);
    update();

    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  return (
    <>
      <section id="hero_section">
        <div className="container">
          {isMobile ? <HeroMobile /> : <HeroDesktop />}
        </div>
      </section>
    </>
  );
}
