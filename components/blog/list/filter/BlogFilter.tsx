"use client";

import { BlogPostListTagSelect } from "./BlogPostListTagSelect";

import type { BlogPostType } from "@/types/blogPostType";

interface BlogFilterProps {
  totalPosts: BlogPostType[];
}

export const BlogFilter: React.FC<BlogFilterProps> = ({ totalPosts }) => {
  return (
    <section className="flex gap-4 p-4 sm:p-8">
      <BlogPostListTagSelect totalPosts={totalPosts} />
    </section>
  );
};
