import { Hexagon } from "lucide-react";

export default function OpenGraphPage() {
  return (
    <div
      className="relative flex items-center justify-center overflow-hidden honeycomb-bg"
      style={{
        width: "1200px",
        height: "630px",
        backgroundColor: "#0F0F1A",
      }}
    >

      {/* Main content */}
      <div className="relative z-10 px-16 text-center">
        {/* Logo/Brand name */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <Hexagon className="h-16 w-16 text-honey fill-honey/20" />
          <span className="font-[family-name:var(--font-syne)] text-5xl text-[#f0ede6] font-bold tracking-tight">
            Beehive Web Designs
          </span>
        </div>

        {/* Main headline */}
        {/* <h1
          className="mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "72px",
            fontWeight: 800,
            color: "#F0EDE6",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Websites That Work
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #F5A623 0%, #FFC857 50%, #FFE66D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            As Hard As You Do
          </span>
        </h1> */}

        {/* Subtitle */}
        <p
          className="mb-8 max-w-2xl mx-auto"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "28px",
            color: "#8A8A9A",
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          Web Design • Hosting • SEO for Small Business
        </p>

        {/* Decorative hexagon */}
        <div className="flex justify-center mt-8">
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.3 }}
          >
            <path
              d="M50 10L90 30V70L50 90L10 70V30L50 10Z"
              stroke="#F5A623"
              strokeWidth="2"
            />
            <path
              d="M50 25L75 40V60L50 75L25 60V40L50 25Z"
              stroke="#F5A623"
              strokeWidth="1.5"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>

      {/* Corner decorative elements */}
      <div
        className="absolute top-8 right-8"
        style={{ opacity: 0.2 }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 10L170 50V130L100 170L30 130V50L100 10Z"
            stroke="#F5A623"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div
        className="absolute bottom-8 left-8"
        style={{ opacity: 0.15 }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 10L170 50V130L100 170L30 130V50L100 10Z"
            stroke="#F5A623"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
}
