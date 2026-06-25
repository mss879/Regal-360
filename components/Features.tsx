"use client";

import { useState } from "react";
import { FEATURES } from "@/lib/content";

export default function Features({
  theme = "dark",
}: {
  theme?: "dark" | "cream";
}) {
  const [open, setOpen] = useState<number | null>(0);

  const line = theme === "cream" ? "border-ink/15" : "border-white/12";
  const title = theme === "cream" ? "text-ink" : "text-white";
  const body = theme === "cream" ? "text-ink/55" : "text-white/55";
  const mark = theme === "cream" ? "text-ink/40" : "text-white/40";

  return (
    <div className="grid gap-x-12 md:grid-cols-2">
      {FEATURES.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.title} className={`border-b ${line}`}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className={`text-brand`}>◇</span>
              <span className={`flex-1 text-lg font-semibold ${title}`}>
                {f.title}
              </span>
              <span
                className={`text-xl transition-transform duration-300 ${mark} ${
                  isOpen ? "rotate-45 text-brand" : ""
                }`}
              >
                +
              </span>
            </button>
            <div className={`acc-body ${isOpen ? "open" : ""}`}>
              <div>
                <p className={`max-w-md pb-6 pl-8 text-sm leading-relaxed ${body}`}>
                  {f.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
