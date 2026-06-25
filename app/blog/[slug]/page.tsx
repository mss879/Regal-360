import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/anim/Reveal";
import AnimatedHeading from "@/components/anim/AnimatedHeading";
import CTA from "@/components/CTA";
import { POSTS } from "@/lib/content";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="bg-ink px-6 pb-12 pt-36 sm:pt-44">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Link
              href="/blog"
              className="text-xs uppercase tracking-wide text-white/50 transition-colors hover:text-brand"
            >
              ← All articles
            </Link>
            <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-wide text-white/50">
              <span className="rounded-full bg-brand px-3 py-1 font-bold text-white">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>· {post.readingTime} read</span>
            </div>
          </Reveal>

          <AnimatedHeading
            as="h1"
            text={post.title}
            className="display mt-6 text-4xl text-white sm:text-5xl"
          />
        </div>

        <Reveal className="mx-auto mt-10 max-w-4xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-white/5">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-relaxed text-white/70">
          <p className="text-xl text-white/85">{post.excerpt}</p>
          <p>
            Sri Lanka&apos;s real-estate market is maturing fast, and the gap
            between a good outcome and a great one usually comes down to
            preparation. At Regal 360° we believe a property should be handled
            as a single, joined-up process — not a series of disconnected
            errands across agents, lawyers and advisors.
          </p>
          <h2 className="display pt-4 text-2xl text-white">
            What this means in practice
          </h2>
          <p>
            Every transaction begins with clarity: a clear picture of the
            property, its title, and its future potential. From there we map the
            steps, flag the risks, and keep the legal work moving in parallel so
            nothing stalls at the eleventh hour.
          </p>
          <blockquote className="border-l-2 border-brand pl-6 text-xl italic text-white">
            “We make your task hassle-free and make sure your property reaches
            its full potential.”
          </blockquote>
          <p>
            Whether you&apos;re buying your first home, leasing commercial space
            or building an investment portfolio, the principles are the same —
            transparency, diligence and an eye on long-term value.
          </p>
        </div>
      </article>

      {/* Related */}
      <section className="bg-ink px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="display text-3xl text-white sm:text-4xl">
            Keep reading
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((p) => (
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
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <span className="text-[11px] uppercase tracking-wide text-brand">
                    {p.category}
                  </span>
                  <h3 className="text-base font-semibold leading-snug text-white">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
