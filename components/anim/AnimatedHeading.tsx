"use client";

import { useRef, ElementType } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  /** Delay between words, seconds */
  stagger?: number;
  /** Render specific words as a highlight chip: { index: "brand" | "ink" } */
  highlights?: Record<number, "brand" | "ink">;
  start?: string;
};

/**
 * Splits a string into words and reveals each with a clip-up mask on scroll.
 */
export default function AnimatedHeading({
  text,
  as: Tag = "h2",
  className = "",
  stagger = 0.045,
  highlights = {},
  start = "top 85%",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      const inners = ref.current?.querySelectorAll<HTMLElement>(".ah-inner");
      if (!inners || !inners.length) return;
      gsap.set(inners, { yPercent: 110 });
      gsap.to(inners, {
        yPercent: 0,
        duration: 1,
        ease: "expo.out",
        stagger,
        scrollTrigger: {
          trigger: ref.current,
          start,
        },
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {words.map((w, i) => {
        const hl = highlights[i];
        return (
          <span
            key={i}
            className="inline-block overflow-hidden align-bottom pb-[0.06em] pr-[0.26em]"
          >
            <span
              className={
                "ah-inner inline-block will-change-transform" +
                (hl ? ` hl hl-${hl}` : "")
              }
            >
              {w}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
