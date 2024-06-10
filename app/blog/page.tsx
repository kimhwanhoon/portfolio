import { BlogMain } from "@/components/blog/list/BlogMain";

import type { Metadata } from "next";

interface BlogPageProps {
  searchParams: {
    page: string;
    tags: string;
    categories: string;
    ascending: string;
  };
}

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const BlogPage: React.FC<BlogPageProps> = async ({ searchParams }) => {
  return (
    <main className="relative min-h-[calc(100dvh-202px)] pb-8 sm:pb-0">
      <BlogMain searchParams={searchParams} />
    </main>
  );
};

export default BlogPage;
