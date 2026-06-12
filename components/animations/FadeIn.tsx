"use client";

import { useEffect, useRef, useState } from "react";

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function FadeIn({
  children,
  delay = 0,
  className = "",
  animateOnMount = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  animateOnMount?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    if (animateOnMount) {
      setShouldAnimate(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-60px", threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [animateOnMount, prefersReducedMotion]);

  const animationClass =
    shouldAnimate && !prefersReducedMotion ? "fade-in-up" : "";

  return (
    <div
      ref={ref}
      className={[className, animationClass].filter(Boolean).join(" ")}
      style={
        shouldAnimate && !prefersReducedMotion
          ? { animationDelay: `${delay}s` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
