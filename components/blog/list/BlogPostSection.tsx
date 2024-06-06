import React from "react";
import { BlogPostList } from "./BlogPostList";
import { createClient } from "@/lib/supabase/client";
import { BlogPostType } from "@/types/blogPostType";
import { getPageRange } from "@/lib/blog/getPageRange";
import { BlogPageNotFound } from "./BlogPageNotFound";

interface BlogPostSectionProps {
  pageName: number;
}

export const BlogPostSection: React.FC<BlogPostSectionProps> = async ({
  pageName,
}) => {
  const pageRange = getPageRange(pageName);
  let posts: BlogPostType[] | null;

  const supabase = createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .range(...pageRange);

  if (error) {
    posts = null;
  } else {
    posts = data;
  }

  return (
    <>
      {posts && posts?.length > 0 ? (
        <section className="py-12 md:py-20">
          <div className="px-4 md:px-6">
            <div className=" grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
              <BlogPostList posts={posts as BlogPostType[]} />
            </div>
          </div>
        </section>
      ) : (
        <BlogPageNotFound />
      )}
    </>
  );
};
