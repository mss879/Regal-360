"use client";

import { useState } from "react";

const INTERESTS = [
  "Residential",
  "Commercial",
  "Investment",
  "Legal & Deeds",
  "Other",
];

type Status = "idle" | "sending" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [interest, setInterest] = useState("Residential");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // No backend wired yet — simulate a submit so the UX is complete.
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("sent");
  };

  const field =
    "w-full rounded-xl border border-white/12 bg-white/5 px-4 py-3.5 text-white placeholder-white/35 outline-none transition-colors focus:border-brand";
  const label = "mb-2 block text-xs font-semibold uppercase tracking-wide text-white/50";

  if (status === "sent") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-ink-2 p-10 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-brand text-2xl text-white">
          ✓
        </div>
        <h3 className="display mt-6 text-3xl text-white">Message received</h3>
        <p className="mt-3 max-w-sm text-white/60">
          Thanks for reaching out. A member of the Regal 360° team will be in
          touch within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-full border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-ink"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-white/10 bg-ink-2 p-6 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Full name
          </label>
          <input id="name" name="name" required className={field} placeholder="Your name" />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={field}
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={field}
            placeholder="+94 ..."
          />
        </div>
        <div>
          <label className={label} htmlFor="budget">
            Budget (optional)
          </label>
          <input id="budget" name="budget" className={field} placeholder="e.g. LKR 50M" />
        </div>
      </div>

      <div className="mt-6">
        <span className={label}>I&apos;m interested in</span>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setInterest(i)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                interest === i
                  ? "bg-brand text-white"
                  : "border border-white/15 text-white/60 hover:border-white/40 hover:text-white"
              }`}
            >
              {i}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label className={label} htmlFor="message">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${field} resize-none`}
          placeholder="Tell us about your property or what you're looking for..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-brand hover:text-white disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send message"}
        {status !== "sending" && (
          <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-white">
            →
          </span>
        )}
      </button>
    </form>
  );
}
