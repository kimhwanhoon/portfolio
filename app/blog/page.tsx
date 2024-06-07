import { BlogPostSection } from "@/components/blog/list/BlogPostSection";
import { getPageRange } from "@/lib/blog/getPageRange";
import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

interface BlogPageProps {
  searchParams: {
    page: string;
  };
}

const BlogPage: React.FC<BlogPageProps> = async ({ searchParams }) => {
  const pageName: number = Number(searchParams.page);

  if (isNaN(pageName)) {
    redirect("/blog?page=1");
  }
  const pageRange: [number, number] = getPageRange(pageName);

  const supabase = createClient();

  const { data, error: postDataFetchError } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .range(...pageRange);

  // why full data ?
  // 1. to get length of data
  // 2. to make recent posts | related posts
  const { data: totalData, error: totalDataFetchError } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published");

  if (postDataFetchError || totalDataFetchError) {
    redirect("blog/error");
  }

  return (
    <main className="relative min-h-[calc(100dvh-202px)] pb-8 sm:pb-0">
      <BlogPostSection posts={data} totalPostsNumber={totalData.length} />
    </main>
  );
};

export default BlogPage;
