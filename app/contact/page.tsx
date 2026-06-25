import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/anim/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { COMPANY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Regal 360° about buying, selling, leasing or investing in property in Sri Lanka. One stop, every step.",
};

const DETAILS = [
  { label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  {
    label: "Phone",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
  },
  { label: "Office", value: COMPANY.address },
  { label: "Hours", value: "Mon–Sat · 9:00–18:00" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your property"
        description="Whether it's a first home, a commercial space or an investment — tell us what you need and we'll handle every step from here."
        highlights={{ 4: "brand" }}
      />

      <section className="bg-ink px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.3fr]">
          {/* Details */}
          <div>
            <Reveal
              className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2"
              stagger={0.08}
            >
              {DETAILS.map((d) => (
                <div key={d.label} className="bg-ink p-7">
                  <p className="eyebrow text-white/40">{d.label}</p>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="mt-3 block text-lg text-white transition-colors hover:text-brand"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="mt-3 text-lg text-white">{d.value}</p>
                  )}
                </div>
              ))}
            </Reveal>

            <Reveal className="mt-6">
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <iframe
                  title="Regal 360° location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=79.82%2C6.87%2C79.90%2C6.95&layer=mapnik"
                  className="h-64 w-full grayscale invert-[0.92] hue-rotate-180"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal className="mt-6 rounded-3xl border border-white/10 bg-ink-2 p-7">
              <p className="text-sm leading-relaxed text-white/60">
                Prefer to talk it through? Call us directly — from a simple
                purchase to the most complicated sale, there&apos;s no property
                question too big or too small.
              </p>
            </Reveal>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
