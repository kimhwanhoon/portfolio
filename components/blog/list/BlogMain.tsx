import { getPageRange } from "@/lib/blog/getPageRange";
import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";
import { BlogPostSection } from "./BlogPostSection";
import { BlogFilter } from "./filter/BlogFilter";

interface BlogMainProps {
  searchParams: {
    page: string;
  };
}

export const BlogMain: React.FC<BlogMainProps> = async ({
  searchParams: { page },
}) => {
  const pageName: number = Number(page);

  if (isNaN(pageName)) {
    redirect("/blog?page=1");
  }
  const pageRange: [number, number] = getPageRange(pageName);

  const supabase = createClient();

  const { data: rangedData, error: postDataFetchError } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false })
    .range(...pageRange);

  // get full data to make pagination
  const { data: totalPosts, error: totalPostsFetchError } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published");

  if (postDataFetchError || totalPostsFetchError) {
    redirect("blog/error");
  }

  return (
    <>
      <BlogFilter totalPosts={totalPosts} />
      <BlogPostSection
        posts={rangedData}
        totalPostsNumber={totalPosts.length}
      />
    </>
  );
};
