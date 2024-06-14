/* eslint-disable @next/next/no-img-element */
import { BlogMain } from "@/components/blog/post/BlogMain";
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
    title: `${data?.title} - KIMHWANHOON`,
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
    <BlogMain>
      <BlogPostHeader data={data} />
      <div className="mx-auto grid w-full grid-cols-1 gap-8 px-4 py-8 md:grid-cols-3 md:py-8 lg:py-12">
        <div className="prose prose-gray dark:prose-invert max-w-none md:col-span-2">
          <BlogPost data={data} />
        </div>
        <BlogPostSide data={data} />
      </div>
    </BlogMain>
  );
};

export default BlogPostPage;
