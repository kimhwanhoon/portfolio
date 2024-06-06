import { BlogPageNotFound } from "./BlogPageNotFound";
import { BlogPagination } from "./BlogPagination";
import { BlogPostList } from "./BlogPostList";

import type { BlogPostType } from "@/types/blogPostType";

interface BlogPostSectionProps {
  posts: BlogPostType[];
  totalPostsNumber: number;
}

export const BlogPostSection: React.FC<BlogPostSectionProps> = async ({
  posts,
  totalPostsNumber,
}) => {
  return (
    <>
      {posts.length === 0 ? (
        <BlogPageNotFound />
      ) : (
        <section className="py-12 md:py-20">
          <div className="px-4 md:px-6">
            <div className="grid  grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
              <BlogPostList posts={posts as BlogPostType[]} />
            </div>
          </div>
        </section>
      )}
      <BlogPagination totalPostsNumber={totalPostsNumber} />
    </>
  );
};
