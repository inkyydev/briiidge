import { useEffect, useRef, useState } from "react";

import video1 from "../../../assets/video/video-idu-1.mp4";
import video2 from "../../../assets/video/video-idu-2.mp4";

import videoPoster1 from "../../../assets/video-poster-1.png";
import videoPoster2 from "../../../assets/video-poster-2.png";
import videoPoster3 from "../../../assets/video-poster-3.png";
import videoPoster4 from "../../../assets/video-poster-4.png";

import "./Industriousness.css";
export default function Industriousness() {
  const VIDEOS = [video1, video2, video1, video2];

  const POSTERS = [videoPoster1, videoPoster2, videoPoster3, videoPoster4];

  const [index, setIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === index) {
        vid.currentTime = 0;
        const playPromise = vid.play();
        if (playPromise?.catch) playPromise.catch(() => {});
      } else {
        vid.pause();
        vid.currentTime = 0;
      }
    });
  }, [index]);

  const handleEnded = () => {
    setIndex((i) => (i + 1) % VIDEOS.length);
  };

  return (
    <div className="industriousness-hero">
      {VIDEOS.map((src, i) => (
        <div
          className={`video-slide ${i === index ? "is-active" : ""}`}
          key={i}
        >
          <video
            ref={(el) => (videoRefs.current[i] = el)}
            src={src}
            muted
            poster={POSTERS[i]}
            playsInline
            preload="metadata"
            onEnded={handleEnded}
          />
        </div>
      ))}
    </div>
  );
}
