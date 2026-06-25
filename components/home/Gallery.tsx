import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/anim/Reveal";
import { GALLERY } from "@/lib/content";

export default function Gallery() {
  return (
    <section className="bg-ink px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-ink"
          >
            View our stunning gallery
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-ink transition-colors group-hover:bg-ink group-hover:text-white">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </span>
          </Link>
        </Reveal>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {GALLERY.map((g, i) => (
            <Reveal
              key={i}
              y={50}
              className="group relative block break-inside-avoid overflow-hidden rounded-2xl bg-white/5"
            >
              <div
                className={`relative w-full ${
                  g.span === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                } overflow-hidden`}
              >
                <Image
                  src={g.src}
                  alt={g.caption}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                <span className="absolute left-4 top-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white drop-shadow">
                  {g.caption}
                </span>
                <span className="absolute bottom-4 right-4 translate-y-2 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  View
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
