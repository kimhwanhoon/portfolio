/* eslint-disable @next/next/no-img-element */
import { BlogPost } from "@/components/blog/post/BlogPost";
import { BlogPostHeader } from "@/components/blog/post/BlogPostHeader";
import { BlogPostSide } from "@/components/blog/post/BlogPostSide";
import { createClient } from "@/lib/supabase/client";
import type { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(
  { params: { slug }, searchParams }: BlogPostPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const supabase = createClient({ cached: true });
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single();

  return {
    title: data?.title,
    openGraph: {
      title: data?.title,
      description: data?.excerpt ?? "",
      url: `https://hwanhoon.kim/blog/${data?.slug}`,
      siteName: "KIMHWANHOON",
      images: [
        {
          url: data?.featured_image ?? "",
          width: 800,
          height: 600,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const supabase = createClient({ cached: true });
  const { data, error } = await supabase.from("blog_posts").select("slug");

  return data ? data.map((post) => ({ slug: post.slug })) : [];
}

const BlogPostPage: React.FC<BlogPostPageProps> = async ({
  params: { slug },
}) => {
  const supabase = createClient({ cached: true });
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
