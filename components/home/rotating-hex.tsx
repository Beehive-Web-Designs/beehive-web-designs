"use client";

import { m, useReducedMotion } from "framer-motion";

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
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      animate={{ rotate: rotation }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className={className}
    >
      {children}
    </m.div>
  );
}
