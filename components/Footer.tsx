import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 pb-16 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="display text-2xl">
              Regal<span className="text-brand">360°</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              {COMPANY.tagline} Residential, commercial and investment property
              — handled end to end.
            </p>
            <div className="mt-6 flex gap-3">
              {COMPANY.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-wide text-white/70 transition-colors hover:border-brand hover:text-brand"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="eyebrow text-white/40">Sitemap</h4>
            <ul className="mt-5 space-y-3">
              {[...NAV_LINKS, { label: "Contact", href: "/contact" }].map(
                (l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-white/70 transition-colors hover:text-brand"
                    >
                      {l.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow text-white/40">Get in touch</h4>
            <ul className="mt-5 space-y-3 text-white/70">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition-colors hover:text-brand"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-brand"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li>{COMPANY.address}</li>
            </ul>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="select-none pb-6 pt-4">
          <div className="display whitespace-nowrap text-[18vw] leading-none text-white/[0.04]">
            REGAL360°
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 py-8 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights
            reserved.
          </p>
          <p>
            Built by{" "}
            <a
              href="https://arc.ai"
              className="text-white/70 transition-colors hover:text-brand"
            >
              Arc AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
