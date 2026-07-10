"use client";

import { useId } from "react";

type BeeMarkProps = {
  className?: string;
};

/**
 * 3a "top-down bee" mark: spread wings, round head with antennae, teardrop
 * abdomen with stripes cut as negative space. Fills with currentColor.
 */
export function BeeMark({ className }: BeeMarkProps) {
  const maskId = useId();
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
        <g fill="white">
          <path
            d="M27.2 17.5C26.4 13.8 24.4 12 22.2 11"
            stroke="white"
            strokeWidth="2.6"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M36.8 17.5C37.6 13.8 39.6 12 41.8 11"
            stroke="white"
            strokeWidth="2.6"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="21.4" cy="10.6" r="2.8" />
          <circle cx="42.6" cy="10.6" r="2.8" />
          <circle cx="32" cy="21" r="5.8" />
          <ellipse cx="19.5" cy="31" rx="12.5" ry="7.8" transform="rotate(-16 19.5 31)" />
          <ellipse cx="44.5" cy="31" rx="12.5" ry="7.8" transform="rotate(16 44.5 31)" />
          <path d="M32 58C29.2 52 24.5 43 24.5 34C24.5 29.3 27.5 26.7 32 26.7C36.5 26.7 39.5 29.3 39.5 34C39.5 43 34.8 52 32 58Z" />
        </g>
        <rect x="26" y="35" width="12" height="4.6" rx="2.3" fill="black" />
        <rect x="27.2" y="43" width="9.6" height="4.6" rx="2.3" fill="black" />
      </mask>
      <rect width="64" height="64" fill="currentColor" mask={`url(#${maskId})`} />
    </svg>
  );
}

type BeeLogoLockupProps = {
  markSize?: "sm" | "md";
  className?: string;
};

/**
 * Full logo lockup per the 3a concept: honey rounded-square tile with the
 * white bee, next to the "Beehive Web Designs" wordmark.
 */
export function BeeLogoLockup({ markSize = "md", className }: BeeLogoLockupProps) {
  const badge = markSize === "md" ? "h-9 w-9 rounded-xl" : "h-8 w-8 rounded-lg";
  const mark = markSize === "md" ? "h-7 w-7" : "h-6 w-6";
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <span className={`flex items-center justify-center bg-honey ${badge}`}>
        <BeeMark className={`text-espresso ${mark}`} />
      </span>
      <span className="text-lg font-bold tracking-tight leading-none">
        <span className="text-foreground">Beehive</span>{" "}
        <span className="text-honey-dark">Web Designs</span>
      </span>
    </span>
  );
}
