import { BlogPageNotFound } from "@/components/blog/list/BlogPageNotFound";
import { BlogPostSection } from "@/components/blog/list/BlogPostSection";
import { Error } from "@/components/global/Error";
import { getPageRange } from "@/lib/blog/getPageRange";
import { createClient } from "@/lib/supabase/client";
import { BlogPostType } from "@/types/blogPostType";
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

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .range(...pageRange);

  // just to get length of data
  const { data: data2, error: error2 } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published");

  if (error || error2) {
    redirect("blog/error");
  }

  return (
    <main className="relative min-h-[calc(100dvh-202px)]">
      <BlogPostSection posts={data} totalPostsNumber={data2.length} />
    </main>
  );
};

export default BlogPage;
