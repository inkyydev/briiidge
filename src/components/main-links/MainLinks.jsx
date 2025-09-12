import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./MainLinks.css";

gsap.registerPlugin(ScrollTrigger);

export default function MainLinks({ children }) {
  const sectionRef = useRef();
  const refreshed = useRef(false); // flag za “refresh samo jednom”

  useEffect(() => {
    const section = sectionRef.current;
    const bar = section.querySelector(".main-link-wrapper__links");
    const sectionTransition = section.querySelector(".section-transition");

    // Timeline koji vodi animaciju unutar sekcije
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        markers: true,
        onUpdate: (self) => {
          const progress = self.progress * 100;
          if (progress >= 40 && !refreshed.current) {
            // refresh samo jednom po sekciji
            refreshed.current = true;
            ScrollTrigger.refresh();
            console.log("ScrollTrigger refreshed for this section!");
          }
        },
      },
    });

    // Animacije unutar sekcije
    tl.to(bar, { scale: 1, duration: 1 }).to(
      sectionTransition,
      { y: 0, ease: "none" },
      "-=0.6"
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="main_link" ref={sectionRef}>
      <div className="main-link-wrapper">
        <div className="main-link-wrapper__anim">
          <div className="main-link-wrapper__links">
            <Link className="active">CREATE</Link>
            <Link>Find</Link>
            <Link>Reach</Link>
          </div>
          <div className="section-transition">{children}</div>
        </div>
      </div>
    </section>
  );
}
