// "use client" // ako si u Next.js App Routeru
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export function useSplitParagraphs(
  rootRef,
  {
    selector = "p[data-split]",
    start = "top 80%",
    once = false,
    yFrom = 100,
    staggerEach = 0.08,
    ease = "expo.out",
  } = {}
) {
  useLayoutEffect(() => {
    const root = rootRef?.current || document.body;

    const ctx = gsap.context(() => {
      const paras = gsap.utils.toArray(selector);
      const splits = [];

      paras.forEach((el) => {
        const split = new SplitText(el, {
          type: "lines",
          linesClass: "split-line",
        });
        splits.push(split);

        gsap.set(split.lines, { display: "block", overflow: "hidden" });

        gsap.from(split.lines, {
          yPercent: yFrom,
          autoAlpha: 0,
          duration: 1.2,
          ease,
          stagger: { each: staggerEach, from: "start" },
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: once
              ? "play none none none"
              : "play none none reverse",
          },
        });
      });

      document.fonts?.ready?.then(() => ScrollTrigger.refresh());
    }, root);

    return () => ctx.revert();
  }, [rootRef, selector, start, once, yFrom, staggerEach, ease]);
}
