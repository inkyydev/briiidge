import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import Integrity from "./Integrity";
import Imagination from "./Imagination";
import Industriousness from "./Industriousness";

gsap.registerPlugin(ScrollTrigger);

export default function OurValues() {
  const [activeButton, setActiveButton] = useState();
  const integrityRef = useRef();
  const imaginationRef = useRef();
  const indrustriousnessRef = useRef();
  const sectionRef = useRef();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const bar = section.querySelector(".main-link-wrapper__links");
    const sectionTransition = section.querySelector(
      ".our-values-translate-div"
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(bar, { scale: 1, duration: 1 })
      .to(
        sectionTransition,
        {
          y: 0,
          ease: "none",
          duration: 1,
        },
        "-=0.6"
      )
      .from(imaginationRef.current, { x: "-4vw" }, "-=.4")
      .from(indrustriousnessRef.current, { x: "4vw" }, "<")
      .from(integrityRef.current, { height: "8vw" }, "<");

    return () => {
      tl.scrollTrigger && tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  const handleActive = (val) => {
    setActiveButton((prev) => (prev === val ? "" : val));
  };

  return (
    <>
      <div
        className="how-it-works-wrapper-anim section-wrapper-anim-all"
        ref={sectionRef}
      >
        <div className="main-link-wrapper">
          <div className="main-link-wrapper__anim">
            <div className="main-link-wrapper__links">
              <Link className="active">CREATE</Link>
              <Link>Find</Link>
              <Link>Reach</Link>
            </div>
            <div className="our-values-translate-div translate-each-section">
              <section id="our_values">
                <div className="our-values-wrapper">
                  <div className="our-values-nav">
                    <div
                      onClick={(e) => handleActive("imagination")}
                      className={`${
                        activeButton === "imagination" ? "active" : ""
                      } our-values-nav__all our-values-nav__imagination`}
                      ref={imaginationRef}
                    >
                      <span></span>
                      <div className="expanding-div">
                        <div className="expanding-div__inner">
                          <div className="expanding-div__heading">
                            imagination
                          </div>
                          <p>
                            Sparks our vision for the future. Enabling us to
                            challenge conventions and transform human behavior.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={(e) => handleActive("integrity")}
                      className={`our-values-nav__all our-values-nav__integrity ${
                        activeButton === "integrity" ? "active" : ""
                      }`}
                      ref={integrityRef}
                    >
                      <span></span>
                      <div className="expanding-div">
                        <div className="expanding-div__inner">
                          <div className="expanding-div__heading">
                            integrity
                          </div>
                          <p>
                            Guides our passions. Ensuring our actions
                            consistently align with our values.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={(e) => handleActive("industriousness")}
                      className={`${
                        activeButton === "industriousness" ? "active" : ""
                      } our-values-nav__all our-values-nav__industriousness`}
                      ref={indrustriousnessRef}
                    >
                      <span></span>
                      <div className="expanding-div">
                        <div className="expanding-div__inner">
                          <div className="expanding-div__heading">
                            industriousness
                          </div>
                          <p>
                            Fuels our attitude to working endeavors. Propelling
                            us past obstacles through tireless dedication to
                            meaningful pursuits.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="anim-background-values">
                  <AnimatePresence mode="wait">
                    {activeButton === "integrity" && (
                      <motion.div
                        key="integrity"
                        initial={{ opacity: 0, y: 12, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Integrity />
                      </motion.div>
                    )}
                    {activeButton === "imagination" && (
                      <motion.div
                        key="imagination"
                        initial={{ opacity: 0, y: 12, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Imagination />
                      </motion.div>
                    )}
                    {activeButton === "industriousness" && (
                      <motion.div
                        key="industriousness"
                        initial={{ opacity: 0, y: 12, scale: 0.85 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Industriousness />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
