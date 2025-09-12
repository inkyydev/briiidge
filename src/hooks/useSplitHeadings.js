import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export function useSplitHeadings(
  rootRef,
  {
    selector = "h1[data-split], h2[data-split], h3[data-split]",
    type = "words",
    start = "top 80%",
    once = true,
    yFrom = 120,
    staggerEach = 0.06,
  } = {}
) {
  useLayoutEffect(() => {
    const root = rootRef?.current || document.body;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(selector);
      const splits = [];

      targets.forEach((el) => {
        const split = new SplitText(el, {
          type,
          wordsClass: "split-word",
          charsClass: "split-char",
        });
        splits.push(split);

        const pieces = type.includes("chars") ? split.chars : split.words;

        gsap.set(pieces, { display: "inline-flex", overflow: "hidden" });

        gsap.from(pieces, {
          yPercent: yFrom,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: { each: staggerEach, from: "start" },
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none reverse",
            // markers: true,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, [rootRef, selector, type, start, once, yFrom, staggerEach]);
}
