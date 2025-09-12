import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

export default function HeroDesktop() {
  const headerRef = useRef(null);

  useEffect(() => {
    const heroSlider = document.querySelector(".hero-slider-desktop");
    const split = new SplitText(headerRef.current, {
      type: "words",
      wordsClass: "split-word",
    });

    gsap.set(split.words, { display: "inline-flex", overflow: "hidden" });

    const tl = gsap.timeline({});

    tl.fromTo(
      ".hero-desktop-anim-first",
      {
        transform: "scale3d(0.4,0.4,1)",
        opacity: "0",
        duration: 2,
        ease: "expo.out",
      },
      {
        transform: "scale3d(1,1,1)",
        opacity: "1",
        duration: 2,
        ease: "expo.out",
      }
    )
      .from(
        split.words,
        {
          y: 100,
          duration: 0.7,
          stagger: 0.13,
        },
        "-=1"
      )
      .to(".introducing-anim-banner h1", {
        scale: 0.8,
        duration: 0.3,
        opacity: 0,
        delay: "0.8",
      })
      .to(".hero-desktop-anim-first", {
        minHeight: 0,
        maxHeight: 0,
        duration: 0.7,
      })
      .to(".hero-slider-desktop > h2", {
        opacity: 1,
        scale: 1,
        delay: 0.2,
      })
      .to(".hero-slider-desktop__single", {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
      })
      .to(".hero-slider-desktop", {
        onComplete: () => {
          document
            .querySelector(".hero-slider-desktop__wrapper")
            ?.classList.add("active");
        },
      });

    heroSlider.addEventListener("mouseenter", function () {
      heroSlider.classList.add("heading-active");
    });

    heroSlider.addEventListener("mouseleave", function () {
      heroSlider.classList.remove("heading-active");
    });
  }, []);

  return (
    <div className="hero-desktop-anim">
      <div className="hero-desktop-anim-first">
        <div className="introducing-anim-banner">
          <h1 ref={headerRef}>
            <div className="split-word-container">
              <span className="split-word">
                <div className="split-word-mask">Introducing</div>
              </span>
              <span className="split-word">
                <div className="split-word-mask">the</div>
              </span>
              <span className="split-word">
                <div className="split-word-mask">BRIIIDG</div>
              </span>
              <span className="split-word">
                <div className="split-word-mask">PowerSERIES</div>
              </span>
            </div>
          </h1>
        </div>
      </div>
      <div className="hero-slider-desktop">
        <h2>Offering three unique configurations:</h2>
        <div className="hero-slider-desktop__wrapper">
          <div className="hero-slider-desktop__single powerhub-single">
            <div className="hero-slider-desktop__single--inner">
              <h2>PowerHUB</h2>
            </div>
          </div>
          <div className="hero-slider-desktop__single elevate-single">
            <div className="hero-slider-desktop__single--inner">
              <h2>ELEVATE YOUR CUSTOMERS</h2>
            </div>
          </div>
          <div className="hero-slider-desktop__single powerpod-single">
            <div className="hero-slider-desktop__single--inner">
              <h2>PowerPOD</h2>
            </div>
          </div>
          <div className="hero-slider-desktop__single engance-single">
            <div className="hero-slider-desktop__single--inner">
              <h2>Enhance Your Community</h2>
            </div>
          </div>
          <div className="hero-slider-desktop__single powerframe-single">
            <div className="hero-slider-desktop__single--inner">
              <h2>PowerFRAME</h2>
            </div>
          </div>
          <div className="hero-slider-desktop__single transform-single">
            <div className="hero-slider-desktop__single--inner">
              <h2>Transform Your Neighbourhood</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
