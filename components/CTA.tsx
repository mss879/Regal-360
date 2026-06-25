import Link from "next/link";
import WebGLBackground from "@/components/WebGLBackground";
import AnimatedHeading from "@/components/anim/AnimatedHeading";
import Reveal from "@/components/anim/Reveal";
import MagneticButton from "@/components/anim/MagneticButton";
import { COMPANY } from "@/lib/content";

export default function CTA() {
  return (
    <section className="px-4 pb-16 pt-8 sm:px-6">
      <div className="grain relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-ink-2 px-6 py-20 text-center sm:rounded-[40px] sm:px-12 sm:py-28">
        <div className="absolute inset-0 opacity-70">
          <WebGLBackground intensity={0.9} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/40" />

        <div className="relative z-10">
          <AnimatedHeading
            as="h2"
            text="Let's unlock your property's full potential."
            className="display mx-auto max-w-3xl text-4xl text-white sm:text-6xl lg:text-7xl"
            highlights={{ 4: "brand" }}
          />
          <Reveal className="mx-auto mt-6 max-w-xl">
            <p className="text-base leading-relaxed text-white/70">
              From a simple purchase to the most complicated sale — talk to the
              team that handles every step under one roof.
            </p>
          </Reveal>
          <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-brand hover:text-white"
            >
              Start a conversation
            </MagneticButton>
            <Link
              href={`mailto:${COMPANY.email}`}
              className="rounded-full border border-white/25 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {COMPANY.email}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
