"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { CTABanner } from "@/components/cta-banner";
import { BlogPostBody } from "@/components/blog/BlogPostBody";
import type { BlogPost } from "@/lib/blog/types";
import { formatBlogDate } from "@/lib/format-blog-date";

type BlogPostClientProps = {
  post: BlogPost;
};

export function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <PageShell>
      <section className="pt-36 pb-12">
        <div className="mx-auto max-w-3xl px-6">
          
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
          

          
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-honey-dark" />
                {formatBlogDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-honey-dark" />
                {post.readTime}
              </span>
            </div>
          

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="py-24 bg-section-alt">
        <div className="mx-auto max-w-3xl px-6">
          
            <BlogPostBody slug={post.slug} />
          
        </div>
      </section>

      <CTABanner />
    </PageShell>
  );
}
