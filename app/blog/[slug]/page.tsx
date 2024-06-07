import { BlogPost } from "@/components/blog/post/BlogPost";
import { BlogPostHeader } from "@/components/blog/post/BlogPostHeader";
import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

const BlogPostPage: React.FC<BlogPostPageProps> = async ({
  params: { slug },
}) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    redirect("/blog/page-not-found");
  }

  return (
    <main className="min-h-[calc(100dvh-202px)]">
      <BlogPostHeader data={data} />
      <BlogPost data={data} />
    </main>
  );
};

export default BlogPostPage;
