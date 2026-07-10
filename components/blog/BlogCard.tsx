import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog/types";
import { formatBlogDate } from "@/lib/format-blog-date";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group rounded-2xl bg-card card-soft p-8">
      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground mb-4">
        <span className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 text-honey-dark" />
          {formatBlogDate(post.publishedAt)}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-honey-dark" />
          {post.readTime}
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-honey-dark transition-colors">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>

      <p className="text-muted-foreground leading-relaxed mb-6">
        {post.excerpt}
      </p>

      <Link
        href={`/blog/${post.slug}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-foreground underline underline-offset-4 decoration-honey hover:text-honey-dark transition-colors"
      >
        Read article <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
