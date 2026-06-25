"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import WebGLBackground from "@/components/WebGLBackground";
import MagneticButton from "@/components/anim/MagneticButton";
import Marquee from "@/components/anim/Marquee";

gsap.registerPlugin(useGSAP);

const CREDENTIALS = [
  "RESIDENTIAL",
  "COMMERCIAL",
  "INVESTMENT",
  "LEGAL & DEEDS",
  "VALUATION",
  "DEVELOPMENT",
];

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.15 });
      tl.from(".hero-line .ah-inner", {
        yPercent: 115,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.08,
      })
        .from(
          ".hero-sub",
          { y: 24, opacity: 0, duration: 0.9, ease: "expo.out" },
          "-=0.6"
        )
        .from(
          ".hero-cta",
          { y: 24, opacity: 0, duration: 0.9, ease: "expo.out" },
          "-=0.7"
        )
        .from(
          ".hero-strip",
          { y: 30, opacity: 0, duration: 0.9, ease: "expo.out" },
          "-=0.6"
        )
        .from(
          ".hero-cue",
          { opacity: 0, duration: 0.6 },
          "-=0.4"
        );
    },
    { scope: root }
  );

  const Word = ({
    children,
    chip,
  }: {
    children: React.ReactNode;
    chip?: "brand" | "ink";
  }) => (
    <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
      <span
        className={`ah-inner inline-block ${chip ? `hl hl-${chip}` : ""}`}
      >
        {children}
      </span>
    </span>
  );

  return (
    <section
      ref={root}
      className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-ink"
    >
      {/* WebGL aurora */}
      <div className="absolute inset-0 z-0">
        <WebGLBackground intensity={1} />
      </div>

      {/* Architectural texture layer */}
      <div
        className="absolute inset-0 z-[1] bg-cover bg-center opacity-[0.18] mix-blend-luminosity"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80)",
        }}
      />
      {/* Readability gradient */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-ink/40 via-ink/20 to-ink" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 pt-28 text-center">
        <span className="hero-sub eyebrow mb-6 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80 backdrop-blur">
          Sri Lanka&apos;s first one-stop property partner
        </span>

        <h1 className="display max-w-4xl text-[clamp(2.6rem,9vw,6.5rem)] text-white">
          <span className="hero-line block">
            <Word>Every</Word> <Word>property</Word>
          </span>
          <span className="hero-line block">
            <Word>need,</Word> <Word>under</Word>
          </span>
          <span className="hero-line mt-1 block">
            <Word chip="ink">one</Word> <Word chip="brand">roof</Word>
          </span>
        </h1>

        <p className="hero-sub mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          We handle everything from a simple purchase to the most complicated
          sale — taking care of the legal side and advising on the future
          potential of your property, so your task is genuinely hassle-free.
        </p>

        <div className="hero-cta mt-10">
          <MagneticButton
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-brand hover:text-white"
          >
            Start your project
            <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-ink">
              →
            </span>
          </MagneticButton>
        </div>
      </div>

      {/* Bottom credential strip */}
      <div className="hero-strip relative z-10 border-t border-white/10 bg-gradient-to-t from-black/70 to-transparent py-6 backdrop-blur-sm">
        <Marquee duration={28}>
          {CREDENTIALS.map((c) => (
            <div
              key={c}
              className="flex items-center gap-4 px-8 text-sm font-semibold uppercase tracking-[0.2em] text-white/55"
            >
              <span className="text-brand">◆</span>
              {c}
            </div>
          ))}
        </Marquee>
      </div>

      {/* Scroll cue */}
      <div className="hero-cue pointer-events-none absolute bottom-24 left-6 z-10 hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 md:flex">
        <span className="inline-block h-10 w-px animate-pulse bg-white/40" />
        Scroll
      </div>
    </section>
  );
}
