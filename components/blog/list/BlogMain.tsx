import { getPageRange } from "@/lib/blog/getPageRange";
import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";
import { BlogPostSection } from "./BlogPostSection";
import { BlogFilter } from "./filter/BlogFilter";
import { BlogPostType } from "@/types/blogPostType";

interface BlogMainProps {
  searchParams: {
    page: string;
    category: string;
    tags: string;
  };
}

const fetchBlogPosts = async (
  supabase: any,
  pageRange?: [number, number],
  category?: string,
  tags?: string,
): Promise<{ data: BlogPostType[]; total: number }> => {
  let query = supabase
    .from("blog_posts")
    .select("*", { count: "exact" })
    .eq("status", "published")
    .order("created_at", { ascending: false });

  if (category) query = query.eq("category", category);
  if (tags) query = query.contains("tags", [tags]);
  if (pageRange) query = query.range(...pageRange);

  const { data, error, count } = await query;
  if (error) return { data: [], total: 0 };
  return { data: data || [], total: count || 0 };
};

export const BlogMain: React.FC<BlogMainProps> = async ({
  searchParams: { page, category, tags },
}) => {
  const pageName = Number(page);

  if (isNaN(pageName)) {
    redirect(
      `/blog?${category ? `category=${category}&` : ""}${tags ? `tags=${tags}&` : ""}page=1`,
    );
  }

  const pageRange = getPageRange(pageName);
  const supabase = createClient();
  const { data: dataToPass, total } = await fetchBlogPosts(
    supabase,
    pageRange,
    category,
    tags,
  );

  return (
    <>
      <BlogFilter />
      <BlogPostSection posts={dataToPass} totalPostsNumber={total} />
    </>
  );
};
