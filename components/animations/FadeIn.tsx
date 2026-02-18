"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const [shouldAnimate, setShouldAnimate] = useState(animateOnMount);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animateOnMount) {
      setShouldAnimate(true);
      return;
    }

    // Check if element is already in viewport on mount (for hero sections)
    const checkInView = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const isVisible = rect.top < windowHeight && rect.bottom > 0;
        if (isVisible) {
          setShouldAnimate(true);
        }
      }
    };

    // Check immediately and after a short delay to handle mobile viewport calculation delays
    checkInView();
    const timeout = setTimeout(checkInView, 150);
    const timeout2 = setTimeout(checkInView, 300);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, [animateOnMount]);

  // If shouldAnimate is true, use animate. Otherwise use whileInView for scroll-triggered animations
  if (shouldAnimate) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px", amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}