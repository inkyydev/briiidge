import { useEffect, useState } from "react";

import imaginationImg1 from "../../../assets/imagination-img-1.png";
import imaginationImg2 from "../../../assets/imagination-img-2.png";
import imaginationImg3 from "../../../assets/imagination-img-3.png";
import imaginationImg4 from "../../../assets/imagination-img-4.png";
import imaginationImg5 from "../../../assets/imagination-img-5.png";
import imaginationImg6 from "../../../assets/imagination-img-6.png";
import imaginationImg7 from "../../../assets/imagination-img-7.png";
import imaginationImg8 from "../../../assets/imagination-img-8.png";
import imaginationImg9 from "../../../assets/imagination-img-9.png";
import imaginationImg10 from "../../../assets/imagination-img-10.png";
import imaginationImg11 from "../../../assets/imagination-img-11.png";

import "./Imagination.css";

export default function Imagination() {
  const IMAGES = [
    imaginationImg1,
    imaginationImg2,
    imaginationImg3,
    imaginationImg4,
    imaginationImg5,
    imaginationImg6,
    imaginationImg7,
    imaginationImg8,
    imaginationImg9,
    imaginationImg10,
    imaginationImg11,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalMs = 3500;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [IMAGES.length]);

  return (
    <div className="imagination-hero">
      {IMAGES.map((src, i) => (
        <div className={`slide ${i === index ? "is-active" : ""}`} key={i}>
          <img src={src} alt="" loading="lazy" />
        </div>
      ))}
    </div>
  );
}
