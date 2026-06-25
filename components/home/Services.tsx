"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import AnimatedHeading from "@/components/anim/AnimatedHeading";
import { SERVICES } from "@/lib/content";

export default function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0, raf: 0 });

  const startFollow = () => {
    if (pos.current.raf) return;
    const loop = () => {
      pos.current.x += (pos.current.tx - pos.current.x) * 0.12;
      pos.current.y += (pos.current.ty - pos.current.y) * 0.12;
      if (previewRef.current) {
        previewRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      pos.current.raf = requestAnimationFrame(loop);
    };
    pos.current.raf = requestAnimationFrame(loop);
  };

  const onMove = (e: React.MouseEvent) => {
    pos.current.tx = e.clientX;
    pos.current.ty = e.clientY;
  };

  return (
    <section className="relative bg-ink px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <AnimatedHeading
            as="h2"
            text="Smart solutions for every property"
            className="display max-w-3xl text-4xl sm:text-6xl lg:text-7xl"
            highlights={{ 4: "brand" }}
          />
          <Link
            href="/projects"
            className="shrink-0 text-sm font-semibold uppercase tracking-[0.15em] text-brand transition-opacity hover:opacity-70"
          >
            [ View projects ]
          </Link>
        </div>

        {/* List */}
        <ul
          className="mt-16 border-t border-white/10"
          onMouseLeave={() => setHoverIdx(null)}
        >
          {SERVICES.map((s, i) => {
            const open = openIdx === i;
            return (
              <li
                key={s.n}
                className="border-b border-white/10"
                onMouseEnter={() => {
                  setHoverIdx(i);
                  startFollow();
                }}
                onMouseMove={onMove}
              >
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="group flex w-full items-center gap-5 py-6 text-left sm:py-7"
                  aria-expanded={open}
                >
                  <span className="w-10 shrink-0 font-mono text-xs text-white/40">
                    {s.n}
                  </span>
                  <span
                    className={`display flex-1 text-2xl transition-colors duration-300 sm:text-4xl ${
                      open ? "text-brand" : "text-white group-hover:text-white/70"
                    }`}
                  >
                    {s.title}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/20 text-lg transition-all duration-300 ${
                      open ? "rotate-45 border-brand text-brand" : "text-white/70"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div className={`acc-body ${open ? "open" : ""}`}>
                  <div>
                    <div className="grid gap-6 pb-8 pl-0 sm:grid-cols-[1fr_1.4fr] sm:pl-15">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/5 sm:hidden">
                        <Image
                          src={s.image}
                          alt={s.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="max-w-md text-base leading-relaxed text-white/60">
                        {s.body}
                      </p>
                      <Link
                        href="/contact"
                        className="self-start text-sm font-semibold uppercase tracking-wide text-white underline decoration-brand decoration-2 underline-offset-4 transition-colors hover:text-brand"
                      >
                        Enquire about this service →
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Cursor-follow preview (desktop) */}
      <div
        ref={previewRef}
        className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
        style={{ willChange: "transform" }}
      >
        <div
          className="relative -ml-32 -mt-24 h-48 w-64 overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-all duration-300"
          style={{
            opacity: hoverIdx !== null ? 1 : 0,
            scale: hoverIdx !== null ? "1" : "0.85",
          }}
        >
          {SERVICES.map((s, i) => (
            <Image
              key={s.n}
              src={s.image}
              alt=""
              fill
              className="object-cover transition-opacity duration-300"
              style={{ opacity: hoverIdx === i ? 1 : 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
