export function HoneycombDecor({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 10L170 50V130L100 170L30 130V50L100 10Z"
        stroke="rgba(245,166,35,0.12)"
        strokeWidth="1.5"
      />
      <path
        d="M100 40L145 65V115L100 140L55 115V65L100 40Z"
        stroke="rgba(245,166,35,0.08)"
        strokeWidth="1"
      />
      <path
        d="M100 70L120 82V108L100 120L80 108V82L100 70Z"
        stroke="rgba(245,166,35,0.15)"
        strokeWidth="1"
      />
    </svg>
  );
}