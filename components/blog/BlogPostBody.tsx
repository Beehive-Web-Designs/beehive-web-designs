import type { ComponentType } from "react";
import { UtahBadWebsitesContent } from "./posts/utah-bad-websites-content";

const postContent: Record<string, ComponentType> = {
  "utah-small-business-bad-websites": UtahBadWebsitesContent,
};

type BlogPostBodyProps = {
  slug: string;
};

export function BlogPostBody({ slug }: BlogPostBodyProps) {
  const Content = postContent[slug];

  if (!Content) {
    return null;
  }

  return (
    <article className="mx-auto max-w-3xl">
      <Content />
    </article>
  );
}
