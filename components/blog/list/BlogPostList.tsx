/* eslint-disable @next/next/no-img-element */
import type { BlogPostType } from "@/types/blogPostType";
import Link from "next/link";
import React from "react";

interface BlogPostList {
  posts: Array<BlogPostType>;
}

export const BlogPostList: React.FC<BlogPostList> = ({ posts }) => {
  if (!posts) {
    return <h3>Error occurred loading posts. Please try again.</h3>;
  }
  const blogList = posts.map(({ slug, featured_image, title, excerpt }, i) => {
    return (
      <div
        key={`blog-post-${i}`}
        className="hover-effect-mild-no-cursor-pointer overflow-hidden rounded-lg shadow-md"
      >
        <Link href={`/blog/${slug}`} prefetch={false}>
          <img
            src={featured_image ?? ""}
            alt={slug ?? title}
            width={600}
            height={400}
            className="h-48 w-full object-cover"
          />
        </Link>
        <div className="p-4">
          <div className="mb-2 flex items-center space-x-2">
            <img
              src="https://zakkxuatcereaxtmsxlo.supabase.co/storage/v1/object/public/blog_post/avatar/profile.avif?t=2024-06-05T21%3A49%3A03.026Z"
              alt="Author Avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Hwanhoon Kim
            </p>
          </div>
          <h3 className="mb-2 text-lg font-semibold">
            <Link
              href={`/blog/${slug}`}
              className="hover:underline"
              prefetch={false}
            >
              {title}
            </Link>
          </h3>
          <p className="line-clamp-3 text-gray-500 dark:text-gray-400">
            {excerpt}
          </p>
        </div>
      </div>
    );
  });
  return <>{blogList}</>;
};
