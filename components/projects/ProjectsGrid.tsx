"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/content";

const CATEGORIES = [
  "All",
  "Residential",
  "Commercial",
  "Investment",
  "Mixed-Use",
];

export default function ProjectsGrid() {
  const [filter, setFilter] = useState("All");

  const list = useMemo(
    () =>
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section className="bg-ink px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 border-b border-white/10 pb-8">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors ${
                filter === c
                  ? "bg-white text-ink"
                  : "border border-white/15 text-white/60 hover:border-white/40 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article
              key={p.slug}
              className={`group relative overflow-hidden rounded-2xl bg-white/5 ${
                p.span === "wide" ? "sm:col-span-2" : ""
              }`}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  p.span === "tall"
                    ? "aspect-[3/4]"
                    : p.span === "wide"
                    ? "aspect-[16/9]"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  {p.category}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div>
                  <h3 className="display text-2xl text-white">{p.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wide text-white/60">
                    {p.location} · {p.year}
                  </p>
                </div>
                <span className="grid h-9 w-9 shrink-0 translate-y-2 place-items-center rounded-full bg-white text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
