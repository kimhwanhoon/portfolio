/* eslint-disable @next/next/no-img-element */
import { BlogPost } from "@/components/blog/post/BlogPost";
import { BlogPostHeader } from "@/components/blog/post/BlogPostHeader";
import { BlogPostSide } from "@/components/blog/post/BlogPostSide";
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
      <div className="container mx-auto grid grid-cols-1 gap-8 py-8 sm:px-4 md:grid-cols-3 md:py-8 lg:py-12">
        <div className="prose prose-gray dark:prose-invert col-span-2 max-w-none">
          <BlogPost data={data} />
        </div>
        <BlogPostSide data={data} />
      </div>
    </main>
  );
};

export default BlogPostPage;
