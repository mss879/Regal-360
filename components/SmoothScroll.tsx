"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });
    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Refresh once everything (fonts/images) settles.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 600);

    return () => {
      gsap.ticker.remove(raf);
      window.removeEventListener("load", refresh);
      clearTimeout(t);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  // Reset scroll + refresh triggers on route change.
  useEffect(() => {
    lenisInstance?.scrollTo(0, { immediate: true });
    const t = setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => clearTimeout(t);
  }, [pathname]);

  return <>{children}</>;
}
