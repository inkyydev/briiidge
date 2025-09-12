import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

export default function HeroMobile() {
  const headerRef = useRef();

  useEffect(() => {
    const split = new SplitText(headerRef.current, {
      type: "words",
      wordsClass: "split-word",
    });

    gsap.set(split.words, { display: "inline-flex", overflow: "hidden" });

    const tl = gsap.timeline({});

    tl.fromTo(
      ".hero-mobile-anim-first",
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
      .to(".hero-mobile-anim-first h1", {
        scale: 0.8,
        duration: 0.3,
        opacity: 0,
        delay: "1",
      })
      .to(".hero-mobile-anim-first", {
        minHeight: 0,
        maxHeight: 0,
        duration: 0.7,
      })
      .to(".hero-slider-mobile-anim", {
        opacity: 1,
      });
  }, []);

  const items = [
    "Transform Your Neighbourhood",
    "PowerFRAME",
    "Enhance Your Community",
    "PowerPOD",
    "ELEVATE YOUR CUSTOMERS",
    "PowerHUB",
  ];

  return (
    <div class="hero-mobile-anim">
      <div className="hero-mobile-anim-first">
        <h1 ref={headerRef}>
          <div className="split-word-container">
            <span className="split-word">
              <div className="split-word-mask">Offering</div>
            </span>
            <span className="split-word">
              <div className="split-word-mask">three</div>
            </span>
            <span className="split-word">
              <div className="split-word-mask">unique</div>
            </span>
            <span className="split-word">
              <div className="split-word-mask">configurations:</div>
            </span>
          </div>
        </h1>
        <div className="hero-mobile-anim-first__col">
          <div className="hero-mobile-single transform-single"></div>
          <div className="hero-mobile-single powerframe-single"></div>
          <div className="hero-mobile-single powerpod-single"></div>
          <div className="hero-mobile-single enhance-single"></div>
          <div className="hero-mobile-single elevate-single"></div>
          <div className="hero-mobile-single powerhub-single"></div>
        </div>
      </div>
      <div className="hero-slider-mobile-anim">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          slidesPerView={1}
          spaceBetween={5}
          loop
          speed={1000}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="hero-swiper"
        >
          {items.map((title, i) => (
            <SwiperSlide
              key={i}
              className={`hero-slider-mobile-anim__all hero-slider-mobile-anim__${i}`}
            >
              <h2>{title}</h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
