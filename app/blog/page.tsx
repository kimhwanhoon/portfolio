import { BlogPostSection } from "@/components/blog/list/BlogPostSection";
import { SectionType2 } from "@/components/sections/SectionType2";

const BlogPage = () => {
  return (
    <main className="min-h-[calc(100dvh-202px)]">
      <SectionType2
        key={"blog section"}
        title="Insights and Reflections"
        subtitle="Thoughts on Technology, Lifestyle, and More"
      />
      <BlogPostSection />
    </main>
  );
};

export default BlogPage;
