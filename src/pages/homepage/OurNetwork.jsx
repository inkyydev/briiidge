import { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BtnAll from "../../components/BtnAll";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function OurNetwork() {
  const sectionRef = useRef();
  const mainHeader = useRef();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const bar = section.querySelector(".main-link-wrapper__links");
    const sectionTransition = section.querySelector(
      ".our-network-translate-div"
    );

    const networkItems = section.querySelectorAll(".network-single");

    gsap.set(networkItems, { y: 20, autoAlpha: 0 });

    const splitMain = new SplitText(mainHeader.current, {
      type: "words",
      wordsClass: "split-word",
    });
    gsap.set(splitMain.words, {
      display: "inline-block",
      overflow: "hidden",
      yPercent: 100,
      autoAlpha: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "97% bottom",
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
      .to(
        splitMain.words,
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          stagger: { each: 0.03, from: "start" },
        },
        "-=0.5"
      )
      .to(
        networkItems,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: { each: 0.1, from: "start" },
        },
        "-=0.8"
      );
  }, []);
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
            <div className="our-network-translate-div translate-each-section">
              <section id="our_network">
                <div className="container">
                  <h2 ref={mainHeader}>Become part of our network</h2>
                  <div className="our-network-wrapper">
                    <div className="network-single">
                      <h3>Tour a showroom</h3>
                      <p>
                        Secure your bike, connect the charging cable, and power
                        up—our dock charges e-bikes safely and efficiently,
                        anytime, anywhere.
                      </p>
                      <BtnAll link="#">Explore</BtnAll>
                    </div>
                    <div className="network-single active">
                      <h3>Book a call</h3>
                      <p>
                        Secure your bike, connect the charging cable, and power
                        up—our dock charges e-bikes safely and efficiently,
                        anytime, anywhere.
                      </p>
                      <BtnAll link="#">Get in touch</BtnAll>
                    </div>
                    <div className="network-single">
                      <h3>Join a waitlist today</h3>
                      <p>
                        Secure your bike, connect the charging cable, and power
                        up—our dock charges e-bikes safely and efficiently,
                        anytime, anywhere.
                      </p>
                      <BtnAll link="#">Join Now</BtnAll>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
