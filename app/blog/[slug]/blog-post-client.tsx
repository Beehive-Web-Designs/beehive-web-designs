"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { HoneycombDecor } from "@/components/HoneyCombDecor";
import { CTABanner } from "@/components/cta-banner";
import { BlogPostBody } from "@/components/blog/BlogPostBody";
import type { BlogPost } from "@/lib/blog/types";

type BlogPostClientProps = {
  post: BlogPost;
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <div className="min-h-screen bg-[#0F0F1A] text-[#F0EDE6] overflow-x-hidden">
      <NavBar />

      <section className="relative pt-28 pb-12 honeycomb-bg">
        <HoneycombDecor className="absolute top-24 left-10 w-36 h-36 opacity-25 hidden lg:block" />

        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <FadeIn delay={0.05} animateOnMount>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[#8A8A9A] hover:text-honey transition-colors mb-8 font-[family-name:var(--font-space-grotesk)] uppercase tracking-wide"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </FadeIn>

          <FadeIn delay={0.1} animateOnMount>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#8A8A9A] uppercase tracking-wider mb-6 font-[family-name:var(--font-space-grotesk)]">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-honey" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-honey" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-[#F0EDE6]">
              {post.title}
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 relative">
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <FadeIn delay={0.15}>
            <BlogPostBody slug={post.slug} />
          </FadeIn>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
