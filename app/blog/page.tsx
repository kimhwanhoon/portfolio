import { BlogPostSection } from "@/components/blog/list/BlogPostSection";
import { SectionType2 } from "@/components/sections/SectionType2";
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
  const pageName = Number(searchParams.page) as number;

  if (isNaN(pageName)) {
    redirect("/blog?page=1");
  }
  const pageRange = getPageRange(pageName);
  let posts: BlogPostType[];

  const supabase = createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .range(...pageRange);

  if (error) {
    redirect("blog/error");
  } else {
    posts = data;
  }

  return (
    <main className="min-h-[calc(100dvh-202px)]">
      (
      <SectionType2
        key={"blog section"}
        title="Insights and Reflections"
        subtitle="Thoughts on Technology, Lifestyle, and More"
      />
      )
      <BlogPostSection posts={posts} />
    </main>
  );
};

export default BlogPage;
