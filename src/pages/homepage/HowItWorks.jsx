import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import BtnAll from "../../components/BtnAll";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const firstH = useRef(null);
  const firstP = useRef(null);
  const firstBtn = useRef(null);

  const secondH = useRef(null);
  const secondP = useRef(null);
  const secondBtn = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const bar = section.querySelector(".main-link-wrapper__links");
    const sectionTransition = section.querySelector(".translate-each-section");

    const splitH = new SplitText(firstH.current, {
      type: "words",
      wordsClass: "split-word",
    });
    gsap.set(splitH.words, { display: "inline-block", overflow: "hidden" });

    const splitFirstP = new SplitText(firstP.current, {
      type: "lines",
      linesClass: "split-line",
    });
    gsap.set(splitFirstP.lines, { display: "block", overflow: "hidden" });
    gsap.set(firstBtn.current, { y: 20, autoAlpha: 0 });

    const splitHSecond = new SplitText(secondH.current, {
      type: "words",
      wordsClass: "split-word",
    });
    gsap.set(splitHSecond.words, {
      display: "inline-block",
      overflow: "hidden",
    });

    const splitSecondP = new SplitText(secondP.current, {
      type: "lines",
      linesClass: "split-line",
    });
    gsap.set(splitSecondP.lines, { display: "block", overflow: "hidden" });
    gsap.set(secondBtn.current, { y: 20, autoAlpha: 0 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "97% bottom",
          scrub: 1,
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
        .from(
          splitH.words,
          {
            yPercent: 120,
            autoAlpha: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          splitFirstP.lines,
          {
            yPercent: 100,
            autoAlpha: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: { each: 0.06, from: "start" },
          },
          "-=.5"
        )
        .to(
          firstBtn.current,
          { y: 0, autoAlpha: 1, duration: 0.5, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          splitHSecond.words,
          {
            yPercent: 120,
            autoAlpha: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=.3"
        )
        .from(
          splitSecondP.lines,
          {
            yPercent: 100,
            autoAlpha: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: { each: 0.06, from: "start" },
          },
          "-=0.5"
        )
        .to(
          secondBtn.current,
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.5"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
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
          <div className="how-it-works-translate-div translate-each-section">
            <section id="how_it_works">
              <div className="container">
                <div className="how-it-works-wrapper-parent">
                  <div className="how-it-works-wrapper how-it-works-wrapper-first">
                    <h3 ref={firstH}>How it works</h3>
                    <p ref={firstP}>
                      Secure your bike, connect the charging cable, and power
                      up—our dock charges e-bikes safely and efficiently,
                      anytime, anywhere.
                    </p>

                    <BtnAll link="/learn-more" ref={firstBtn}>
                      Learn More
                    </BtnAll>
                  </div>
                  <div className="how-it-works-wrapper">
                    <h3 ref={secondH}>Get a quote now</h3>
                    <p ref={secondP}>
                      Secure your bike, connect the charging cable, and power
                      up—our dock charges e-bikes safely and efficiently,
                      anytime, anywhere.
                    </p>
                    <BtnAll link="/proposal" ref={secondBtn}>
                      Proposal
                    </BtnAll>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
