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

export const BlogMain: React.FC<BlogMainProps> = async ({
  searchParams: { page, category, tags },
}) => {
  let dataToPass: BlogPostType[];
  const pageName: number = Number(page);

  if (isNaN(pageName)) {
    redirect("/blog?page=1");
  }
  const pageRange: [number, number] = getPageRange(pageName);

  const supabase = createClient();

  if (category && !tags) {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("status", "published")
      .eq("category", category)
      .order("created_at", { ascending: false })
      .range(...pageRange);
    if (error) {
      dataToPass = [];
    }
    dataToPass = data!;
  } else if (tags && !category) {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("status", "published")
      .contains("tags", [tags])
      .order("created_at", { ascending: false })
      .range(...pageRange);

    if (error) {
      dataToPass = [];
    }
    dataToPass = data!;
  } else if (tags && category) {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("status", "published")
      .eq("category", category)
      .contains("tags", [tags])
      .order("created_at", { ascending: false })
      .range(...pageRange);
    if (error) {
      dataToPass = [];
    }
    dataToPass = data!;
  } else {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("status", "published")
      .order("created_at", { ascending: false })
      .range(...pageRange);
    if (error) {
      dataToPass = [];
    }
    dataToPass = data!;
  }

  // get full data to make pagination
  const { data: totalPosts, error: totalPostsFetchError } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published");

  if (totalPostsFetchError) {
    redirect("blog/error");
  }

  return (
    <>
      <BlogFilter totalPosts={totalPosts} />
      <BlogPostSection
        posts={dataToPass}
        totalPostsNumber={totalPosts.length}
      />
    </>
  );
};
