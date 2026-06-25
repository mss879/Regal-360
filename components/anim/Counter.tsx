"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Counter({
  value,
  suffix = "",
  prefix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const obj = { v: 0 };
      gsap.to(obj, {
        v: value,
        duration: 1.8,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = `${prefix}${Math.round(obj.v)}${suffix}`;
        },
        scrollTrigger: { trigger: el, start: "top 90%" },
      });
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
