import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import AnimatedHeading from "@/components/anim/AnimatedHeading";
import Reveal from "@/components/anim/Reveal";
import Parallax from "@/components/anim/Parallax";
import Counter from "@/components/anim/Counter";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import { STATS } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Regal 360° is Sri Lanka's first true one-stop real-estate company — handling everything from a simple purchase to the most complicated sale, including the legal side.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="More than property. A complete partnership."
        description="The first of its kind in Sri Lanka — we handle the simple and the complicated alike, and take care of the legal side along the way."
        highlights={{ 1: "brand" }}
      />

      {/* Quote + sketch */}
      <section className="bg-cream px-6 py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedHeading
            as="blockquote"
            text="We build trust the way we build value — by handling every step of your property journey with care and complete transparency."
            className="display text-2xl text-ink sm:text-4xl lg:text-5xl"
            highlights={{ 5: "brand" }}
          />
        </div>

        <Reveal className="mx-auto mt-14 max-w-2xl">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink/5">
            <Parallax className="absolute inset-0 -top-[10%] h-[120%]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Modern home"
                fill
                className="object-cover"
              />
            </Parallax>
          </div>
        </Reveal>
      </section>

      {/* Why we are special */}
      <section className="bg-ink px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] md:items-end">
            <div>
              <span className="eyebrow flex items-center gap-2 text-brand">
                <span className="h-px w-8 bg-brand" /> About us
              </span>
              <AnimatedHeading
                as="h2"
                text="Why we are special"
                className="display mt-5 text-4xl text-white sm:text-6xl"
              />
            </div>
            <Reveal>
              <p className="text-base leading-relaxed text-white/60">
                We at Regal 360° are the first and only company in Sri Lanka&apos;s
                emerging real-estate market to offer a truly comprehensive
                solution to property needs. From a simple purchase to the most
                complicated sale, we take care of the legal aspect and advise on
                existing and future development of the property.
              </p>
            </Reveal>
          </div>

          <div className="mt-16">
            <Features theme="dark" />
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-ink px-6 pb-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 rounded-[28px] border border-white/10 bg-ink-2 px-8 py-14 sm:rounded-[40px] md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="display text-4xl text-brand sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-white/55">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
