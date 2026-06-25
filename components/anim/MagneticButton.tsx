"use client";

import { useRef, ReactNode } from "react";
import Link from "next/link";
import { gsap } from "gsap";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  strength?: number;
  type?: "button" | "submit";
};

/**
 * A button/link whose contents drift toward the pointer on hover.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  strength = 0.4,
  type = "button",
}: Props) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  const move = (e: React.PointerEvent) => {
    const el = wrapRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    gsap.to(el, { x: x * strength, y: y * strength, duration: 0.5, ease: "power3.out" });
    gsap.to(inner, { x: x * strength * 0.35, y: y * strength * 0.35, duration: 0.5, ease: "power3.out" });
  };

  const reset = () => {
    gsap.to([wrapRef.current, innerRef.current], {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.4)",
    });
  };

  const inner = <span ref={innerRef} className="relative block">{children}</span>;

  const shared = {
    className,
    onPointerMove: move,
    onPointerLeave: reset,
  };

  return (
    <span ref={wrapRef} className="inline-block will-change-transform">
      {href ? (
        <Link href={href} {...shared}>
          {inner}
        </Link>
      ) : (
        <button type={type} onClick={onClick} {...shared}>
          {inner}
        </button>
      )}
    </span>
  );
}
