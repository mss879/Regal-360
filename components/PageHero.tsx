import WebGLBackground from "@/components/WebGLBackground";
import AnimatedHeading from "@/components/anim/AnimatedHeading";
import Reveal from "@/components/anim/Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
  highlights,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  highlights?: Record<number, "brand" | "ink">;
}) {
  return (
    <section className="grain relative overflow-hidden bg-ink px-6 pb-16 pt-36 sm:pt-44">
      <div className="absolute inset-0 opacity-60">
        <WebGLBackground intensity={0.85} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <span className="eyebrow text-brand">{eyebrow}</span>
        </Reveal>
        <AnimatedHeading
          as="h1"
          text={title}
          className="display mt-5 max-w-4xl text-5xl text-white sm:text-7xl lg:text-8xl"
          highlights={highlights}
        />
        {description && (
          <Reveal className="mt-7 max-w-xl">
            <p className="text-base leading-relaxed text-white/65 sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
