"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AnimatedHeading from "@/components/anim/AnimatedHeading";
import Reveal from "@/components/anim/Reveal";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function WhoWeAre() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const strip = root.current?.querySelector(".scroll-strip");
      if (!strip) return;
      gsap.fromTo(
        strip,
        { xPercent: 8 },
        {
          xPercent: -28,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: root }
  );

  return (
    <section ref={root} className="overflow-hidden bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <span className="eyebrow text-brand">Who we are</span>
        <div className="mt-8 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <AnimatedHeading
            as="h2"
            text="The first true one-stop property company in Sri Lanka."
            className="display text-4xl text-white sm:text-5xl lg:text-6xl"
            highlights={{ 4: "brand" }}
          />
          <div className="space-y-5 text-base leading-relaxed text-white/60">
            <p>
              We at Regal 360° are the first and only company in Sri Lanka&apos;s
              emerging real-estate market to offer our clients a truly
              comprehensive solution to their property needs — making us a
              genuine &lsquo;one stop&rsquo; real-estate company.
            </p>
            <p>
              Be they for residential, commercial or investment purposes, we
              make your task hassle-free and make sure your property reaches its
              full potential.
            </p>
            <Reveal>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white underline decoration-brand decoration-2 underline-offset-4 transition-colors hover:text-brand"
              >
                More about us →
              </Link>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Scroll-driven statement */}
      <div className="mt-20 select-none">
        <div className="scroll-strip display flex w-max gap-8 whitespace-nowrap text-[12vw] leading-none text-white/[0.06] sm:text-[9vw]">
          <span>One stop.</span>
          <span className="text-brand/30">Every step.</span>
          <span>One stop.</span>
          <span className="text-brand/30">Every step.</span>
        </div>
      </div>
    </section>
  );
}
