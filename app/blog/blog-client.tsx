"use client";

import { PageShell } from "@/components/page-shell";
import { FadeIn } from "@/components/animations/FadeIn";
import { HoneycombDecor } from "@/components/HoneyCombDecor";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/lib/blog/posts";

export function BlogClient() {
  return (
    <PageShell>
      <section className="relative pt-28 pb-16 honeycomb-bg">
        <HoneycombDecor className="absolute top-24 right-10 w-40 h-40 opacity-30 hidden lg:block" />
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-honey/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[0.95] tracking-tight mb-6">
            Insights for
            <br />
            <span className="gradient-text">Growing Online</span>
          </h1>

          <FadeIn delay={0.2} animateOnMount>
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed mx-auto">
              Web design, hosting, and local SEO advice for Utah small businesses
              that want more customers — not more confusion.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-28 relative">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <FadeIn key={post.slug} delay={0.1 * index}>
                <BlogCard post={post} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </PageShell>
  );
}
