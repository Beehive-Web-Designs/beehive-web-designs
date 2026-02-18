"use client";

import { LazyMotion, m, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useReducer } from "react";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

type ViewportState = {
  isInView: boolean;
  hasChecked: boolean;
};

type ViewportAction =
  | { type: "SET_IN_VIEW"; payload: boolean }
  | { type: "SET_CHECKED"; payload: boolean };

function viewportReducer(
  state: ViewportState,
  action: ViewportAction
): ViewportState {
  switch (action.type) {
    case "SET_IN_VIEW":
      return { ...state, isInView: action.payload };
    case "SET_CHECKED":
      return { ...state, hasChecked: action.payload };
    default:
      return state;
  }
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
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [viewportState, dispatch] = useReducer(viewportReducer, {
    isInView: animateOnMount,
    hasChecked: animateOnMount,
  });

  useEffect(() => {
    if (animateOnMount) {
      dispatch({ type: "SET_IN_VIEW", payload: true });
      dispatch({ type: "SET_CHECKED", payload: true });
      return;
    }

    // Check if element is already in viewport on mount (for hero sections)
    const checkInView = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const isVisible = rect.top < windowHeight && rect.bottom > 0;
        if (isVisible) {
          dispatch({ type: "SET_IN_VIEW", payload: true });
        }
        dispatch({ type: "SET_CHECKED", payload: true });
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

  const transition = {
    duration: shouldReduceMotion ? 0 : 0.6,
    delay: shouldReduceMotion ? 0 : delay,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  if (shouldReduceMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <LazyMotion features={loadFeatures}>
      {viewportState.isInView ? (
        <m.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className={className}
        >
          {children}
        </m.div>
      ) : (
        <m.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px", amount: 0.1 }}
          transition={transition}
          className={className}
        >
          {children}
        </m.div>
      )}
    </LazyMotion>
  );
}