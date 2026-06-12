"use client";

import { useEffect, useState } from "react";

export function RotatingHex({
  rotation,
  duration,
  className,
  children,
}: {
  rotation: number;
  duration: number;
  className: string;
  children: React.ReactNode;
}) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={`${className} rotating-hex`}
      style={{
        animationDuration: `${duration}s`,
        ["--rotate-to" as string]: `${rotation}deg`,
      }}
    >
      {children}
    </div>
  );
}
