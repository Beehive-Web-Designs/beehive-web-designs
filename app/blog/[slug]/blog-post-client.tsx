"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { PageShell } from "@/components/page-shell";
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
    <PageShell>
      <section className="relative pt-28 pb-12 honeycomb-bg">
        <HoneycombDecor className="absolute top-24 left-10 w-36 h-36 opacity-25 hidden lg:block" />

        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <FadeIn delay={0.05} animateOnMount>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-honey transition-colors mb-8 uppercase tracking-wide"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </FadeIn>

          <FadeIn delay={0.1} animateOnMount>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground uppercase tracking-wider mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-honey" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-honey" />
                {post.readTime}
              </span>
            </div>
          </FadeIn>

          <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
            {post.title}
          </h1>
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
    </PageShell>
  );
}
