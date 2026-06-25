import Image from "next/image";
import AnimatedHeading from "@/components/anim/AnimatedHeading";
import Reveal from "@/components/anim/Reveal";
import Parallax from "@/components/anim/Parallax";
import Counter from "@/components/anim/Counter";
import { STATS } from "@/lib/content";

const StatIcon = ({ d }: { d: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-5 w-5"
  >
    <path d={d} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ICONS = [
  "M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6",
  "M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zM9 16l2 2 4-4",
  "M12 2l2.4 7.4H22l-6 4.6 2.3 7.4L12 17l-6.3 4.4L8 14 2 9.4h7.6z",
  "M20 7L9 18l-5-5",
];

export default function AboutStats() {
  return (
    <section className="relative z-10 bg-ink px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[28px] bg-cream px-6 py-16 text-ink sm:rounded-[40px] sm:px-12 sm:py-20 lg:px-16">
        {/* Heading */}
        <AnimatedHeading
          as="h2"
          text="A decade of trusted property expertise across every sector."
          className="display max-w-4xl text-4xl text-ink sm:text-6xl lg:text-7xl"
          highlights={{ 4: "brand" }}
        />

        <Reveal className="mt-8 max-w-xl">
          <p className="text-base leading-relaxed text-ink/60">
            Regal 360° is the first and only company in Sri Lanka&apos;s emerging
            real-estate market to offer a truly comprehensive solution — whether
            your property is for residential, commercial or investment purposes.
          </p>
        </Reveal>

        {/* Image pair */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink/10">
            <Parallax className="absolute inset-0 -top-[10%] h-[120%]">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=80"
                alt="Commercial property"
                fill
                className="object-cover"
              />
            </Parallax>
            {/* Stat card overlay */}
            <div className="absolute bottom-5 left-5 max-w-[60%] rounded-2xl bg-ink p-5 text-white">
              <div className="display text-4xl">
                <Counter value={50} suffix="+" />
              </div>
              <p className="mt-1 text-xs leading-snug text-white/70">
                Specialists across sales, legal and advisory in our team
              </p>
            </div>
          </Reveal>

          <Reveal
            className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink/10"
            delay={0.1}
          >
            <Parallax className="absolute inset-0 -top-[10%] h-[120%]">
              <Image
                src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1100&q=80"
                alt="Residential property"
                fill
                className="object-cover"
              />
            </Parallax>
          </Reveal>
        </div>

        <Reveal className="mt-10 max-w-xl">
          <p className="text-base leading-relaxed text-ink/60">
            More than a transaction — a promise of clarity, sound advice and a
            property that reaches its full potential.
          </p>
        </Reveal>

        {/* Stats */}
        <div className="mt-14 border-t border-ink/10 pt-12">
          <Reveal
            className="grid grid-cols-2 gap-10 md:grid-cols-4"
            stagger={0.1}
          >
            {STATS.map((s, i) => (
              <div key={s.label}>
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink">
                  <StatIcon d={ICONS[i]} />
                </div>
                <div className="display text-4xl text-ink sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-1 text-sm text-ink/55">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
