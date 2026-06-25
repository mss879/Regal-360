"use client";

import { useRef, ElementType } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
  /** Stagger direct children instead of the wrapper itself */
  stagger?: number;
  start?: string;
};

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  y = 36,
  delay = 0,
  duration = 1,
  stagger,
  start = "top 88%",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const targets =
        stagger != null ? (Array.from(el.children) as HTMLElement[]) : el;

      gsap.from(targets, {
        opacity: 0,
        y,
        duration,
        delay,
        ease: "expo.out",
        stagger,
        scrollTrigger: { trigger: el, start },
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
