"use client";

import { ReactNode } from "react";

/**
 * Seamless CSS marquee. Renders the children twice and translates -50%.
 */
export default function Marquee({
  children,
  duration = 30,
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`marquee-pause overflow-hidden ${className}`}>
      <div
        className="flex w-max animate-marquee"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
