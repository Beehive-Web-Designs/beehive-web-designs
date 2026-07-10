"use client";

import { PageShell } from "@/components/page-shell";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/lib/blog/posts";

export function BlogClient() {
  return (
    <PageShell>
      <section className="pt-36 pb-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          
            <p className="mb-3 text-xs font-bold tracking-widest uppercase text-honey-dark">
              Blog
            </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6">
            Insights for <span className="text-honey-dark">growing online</span>
          </h1>

          
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed mx-auto">
              Web design, hosting, and local SEO advice for Utah small businesses
              that want more customers — not more confusion.
            </p>
          
        </div>
      </section>

      <section className="py-24 bg-section-alt">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <div key={post.slug}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </PageShell>
  );
}
