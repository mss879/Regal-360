"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { NAV_LINKS } from "@/lib/content";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body + animate the mobile overlay.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const tl = gsap.timeline();
      tl.fromTo(
        overlayRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 0.6, ease: "expo.out" }
      ).fromTo(
        linksRef.current?.children ?? [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: "expo.out" },
        "-=0.25"
      );
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [...NAV_LINKS];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
        <nav
          className={`flex w-full max-w-5xl items-center justify-between rounded-full border py-2 pl-2 pr-2 transition-all duration-500 ${
            scrolled
              ? "border-white/10 bg-ink/80 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)] backdrop-blur-xl"
              : "border-white/10 bg-ink/40 backdrop-blur-md"
          }`}
        >
          {/* Logo pill */}
          <Link
            href="/"
            className="flex items-center rounded-full bg-cream px-4 py-2"
            aria-label="Regal 360 home"
          >
            <Image
              src="/logo.png"
              alt="Regal 360° Property Services"
              width={120}
              height={45}
              className="h-7 w-auto"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`group relative rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                    active ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-brand transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-brand hover:text-white sm:inline-block"
            >
              Contact
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/10 md:hidden"
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col gap-[5px]">
                <span
                  className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-40 bg-ink md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{
          clipPath: open ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
          visibility: open ? "visible" : "hidden",
        }}
      >
        <div
          ref={linksRef}
          className="flex h-full flex-col justify-center gap-2 px-8 pt-20"
        >
          {[...links, { label: "Contact", href: "/contact" }].map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="display flex items-baseline gap-4 border-b border-white/10 py-4 text-5xl text-white"
            >
              <span className="text-sm text-brand">
                0{i + 1}
              </span>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
