import type { ComponentType } from "react";
import { UtahBadWebsitesContent } from "./posts/utah-bad-websites-content";
import { UtahWebsiteCostContent } from "./posts/utah-website-cost-content";

const postContent: Record<string, ComponentType> = {
  "how-much-does-a-website-cost-utah": UtahWebsiteCostContent,
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
