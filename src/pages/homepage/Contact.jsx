import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import planetImg from "../../assets/planet-img.svg";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headingEl = section.querySelector(".contact-wrapper__left h2");
    const paraEl = section.querySelector(".contact-wrapper__left p");

    const ctx = gsap.context(() => {
      const splitH = new SplitText(headingEl, {
        type: "words",
        wordsClass: "split-word",
      });
      gsap.set(splitH.words, { display: "inline-block", overflow: "hidden" });

      gsap.from(splitH.words, {
        yPercent: 120,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: { each: 0.08, from: "start" },
        scrollTrigger: {
          trigger: headingEl,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      const splitP = new SplitText(paraEl, {
        type: "lines",
        linesClass: "split-line",
      });
      gsap.set(splitP.lines, { display: "block", overflow: "hidden" });

      gsap.from(splitP.lines, {
        yPercent: 100,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: { each: 0.06, from: "start" },
        scrollTrigger: {
          trigger: paraEl,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-wrapper__left">
            <h2>Let’s talk possibilities</h2>
            <p>
              Secure your bike, connect the charging cable, and power up—our
              dock charges e-bikes safely and efficiently, anytime, anywhere.
            </p>
            <img src={planetImg} alt="planet" className="contact-img-desktop" />
          </div>
          <div className="contact-wrapper__right">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Full Name" name="full_name" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Inquiry Subject"
                  name="subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="about_project"
                  placeholder="About the project"
                />
              </div>
              <button>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L13 1M13 1V13M13 1H1"
                    stroke="black"
                    strokeWidth="1.5"
                  />
                </svg>
                Submit inquiry
              </button>
            </form>
            <div className="contact-img-wrapper">
              <img
                src={planetImg}
                alt="planet"
                className="contact-img-mobile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
