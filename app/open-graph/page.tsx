import type { Metadata } from "next";
import { BeeMark } from "@/components/bee-logo";

export const metadata: Metadata = {
  title: "Open Graph preview",
  description:
    "Fixed-size layout used for Beehive Web Designs social sharing previews.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OpenGraphPage() {
  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        width: "1200px",
        height: "630px",
        backgroundColor: "#FBF8F1",
      }}
    >
      <div className="relative z-10 px-16 text-center">
        {/* Logo lockup */}
        <div className="mb-10 flex items-center justify-center gap-5">
          <span
            className="flex items-center justify-center bg-honey"
            style={{ width: "96px", height: "96px", borderRadius: "24px" }}
          >
            <BeeMark className="h-20 w-20 text-espresso" />
          </span>
          <span className="text-6xl font-bold tracking-tight">
            <span className="text-espresso">Beehive</span>{" "}
            <span className="text-honey-dark">Web Designs</span>
          </span>
        </div>

        {/* Headline */}
        <h1
          className="mb-6 text-espresso"
          style={{
            fontSize: "56px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Websites that turn
          <br />
          visitors into <span className="text-honey-dark">customers.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto max-w-2xl"
          style={{
            fontSize: "26px",
            color: "#6B5D4B",
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          Web Design • Hosting • SEO for Small Business
        </p>
      </div>

      {/* Corner bee marks */}
      <div className="absolute top-10 right-10" style={{ opacity: 0.12 }}>
        <BeeMark className="h-28 w-28 text-espresso" />
      </div>
      <div className="absolute bottom-10 left-10" style={{ opacity: 0.1 }}>
        <BeeMark className="h-20 w-20 text-espresso" />
      </div>
    </div>
  );
}
