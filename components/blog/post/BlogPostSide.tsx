/* eslint-disable @next/next/no-img-element */
import { blogPostCategories } from "@/lib/blog/blogPostCategories";
import { dateFormatter } from "@/lib/blog/dateFormatter";
import { createClient } from "@/lib/supabase/client";
import { BlogPostType } from "@/types/blogPostType";
import Link from "next/link";

interface BlogPostSideProps {
  data: BlogPostType;
}

export const BlogPostSide: React.FC<BlogPostSideProps> = async ({ data }) => {
  // recent posts or related posts
  const supabase = createClient();

  const { data: recentPostsData, error: recentPostsDataFetchError } =
    await supabase
      .from("blog_posts")
      .select("*")
      .eq("status", "published")
      .order("created_at")
      .limit(3);

  const { data: relatedPostsData, error: relatedPostsDataFetchError } =
    await supabase
      .from("blog_posts")
      .select("*")
      .eq("status", "published")
      .eq("category_id", data.category_id!)
      .order("created_at")
      .limit(3);

  const recentPosts = recentPostsData?.map((recentPost, i) => (
    <li key={`recent-post-${i}`}>
      <Link
        href={`/blog/${recentPost.slug}`}
        className="flex items-center space-x-4"
        prefetch={false}
      >
        <img
          src={recentPost.featured_image ?? ""}
          width={80}
          height={60}
          alt={recentPost.title}
          className="h-15 w-20 rounded-lg object-cover"
        />
        <div>
          <h4 className="text-base font-medium">{recentPost.title}</h4>
          <p className="text-sm text-gray-500 ">
            {dateFormatter(recentPost.created_at!)}
          </p>
        </div>
      </Link>
    </li>
  ));

  const relatedPosts = relatedPostsData?.map((relatedPost, i) => (
    <li key={`recent-post-${i}`}>
      <Link
        href={`/blog/${relatedPost.slug}`}
        className="flex flex-col items-center space-x-4 lg:flex-row"
        prefetch={false}
      >
        <img
          src={relatedPost.featured_image ?? ""}
          width={80}
          height={60}
          alt={relatedPost.title}
          className="lg:h-15 w-full rounded-lg object-cover lg:w-20"
        />
        <div>
          <h4 className="text-sm font-medium md:text-base">
            {relatedPost.title}
          </h4>
          <p className="text-xs text-gray-500 md:text-sm ">
            {dateFormatter(relatedPost.created_at!)}
          </p>
        </div>
      </Link>
    </li>
  ));

  const categoriesMenu = blogPostCategories.map((category) => (
    <li key={category.name}>
      <Link
        href={category.href}
        className="text-gray-500 hover:text-gray-900"
        prefetch={false}
      >
        {category.name}
      </Link>
    </li>
  ));

  return (
    <aside className=" space-y-8">
      {/* related posts  */}
      <div className="rounded-lg bg-white p-6 shadow">
        <h3 className="mb-4 text-lg font-bold">Related Posts</h3>
        <ul className="space-y-4">{relatedPosts}</ul>
      </div>
      {/* categories */}
      <div className="rounded-lg bg-white p-6 shadow ">
        <h3 className="mb-4 text-lg font-bold">Categories</h3>
        <ul className="space-y-2">{categoriesMenu}</ul>
      </div>
      {/* recent posts */}
      <div className="rounded-lg bg-white p-6 shadow">
        <h3 className="mb-4 text-lg font-bold">Recent Posts</h3>
        <ul className="space-y-4">{recentPosts}</ul>
      </div>
    </aside>
  );
};
