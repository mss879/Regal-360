import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/anim/Reveal";
import Parallax from "@/components/anim/Parallax";
import { POSTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides, market outlooks and legal know-how from the Regal 360° property team in Sri Lanka.",
};

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes from the Sri Lankan property market"
        description="Guides, market outlooks and the legal know-how we use on every deal — written by the people who close them."
        highlights={{ 4: "brand" }}
      />

      {/* Featured */}
      <section className="bg-ink px-6 pb-6 pt-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-white/10 bg-ink-2 md:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
                <Parallax className="absolute inset-0 -top-[8%] h-[116%]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Parallax>
              </div>
              <div className="flex flex-col justify-center gap-4 p-8 sm:p-12">
                <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-white/50">
                  <span className="rounded-full bg-brand px-3 py-1 font-bold text-white">
                    {featured.category}
                  </span>
                  <span>{featured.date}</span>
                  <span>· {featured.readingTime} read</span>
                </div>
                <h2 className="display text-3xl text-white sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="max-w-md leading-relaxed text-white/60">
                  {featured.excerpt}
                </p>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand">
                  Read article →
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-ink px-6 pb-8 pt-10">
        <div className="mx-auto max-w-6xl">
          <Reveal
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.08}
            y={50}
          >
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-2 transition-colors hover:border-white/25"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-wide text-white/45">
                    <span className="text-brand">{p.category}</span>
                    <span>{p.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-white">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55">
                    {p.excerpt}
                  </p>
                  <span className="mt-auto pt-2 text-xs uppercase tracking-wide text-white/40">
                    {p.readingTime} read
                  </span>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
