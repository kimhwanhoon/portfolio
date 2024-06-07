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

  const { data: rangedData, error: postDataFetchError } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false })
    .range(...pageRange);

  // get full data to make pagination
  const { data: totalData, error: totalDataFetchError } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published");

  if (postDataFetchError || totalDataFetchError) {
    redirect("blog/error");
  }

  return (
    <main className="relative min-h-[calc(100dvh-202px)] pb-8 sm:pb-0">
      <BlogPostSection posts={rangedData} totalPostsNumber={totalData.length} />
    </main>
  );
};

export default BlogPage;
