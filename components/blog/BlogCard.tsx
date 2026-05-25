import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog/types";

type BlogCardProps = {
  post: BlogPost;
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group border-[rgba(245,166,35,0.15)] bg-[#14141F]/80 hover:border-honey/30 transition-colors">
      <CardContent className="p-8">
        <div className="flex flex-wrap items-center gap-4 text-xs text-[#8A8A9A] uppercase tracking-wider mb-4 font-[family-name:var(--font-space-grotesk)]">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-honey" />
            {formatDate(post.publishedAt)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-honey" />
            {post.readTime}
          </span>
        </div>

        <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-[#F0EDE6] mb-4 group-hover:text-honey transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        <p className="text-[#8A8A9A] leading-relaxed mb-6 font-[family-name:var(--font-space-grotesk)]">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-honey hover:text-honey-light transition-colors uppercase tracking-wide"
        >
          Read article <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
