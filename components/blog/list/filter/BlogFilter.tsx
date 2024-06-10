import { createClient } from "@/lib/supabase/client";
import { BlogPostListTagSelect } from "./BlogPostListTagSelect";
import { BlogPostListCategorySelect } from "./BlogPostListCategorySelect";

export const BlogFilter: React.FC = async () => {
  const supabase = createClient({ cached: true });
  const { data: categoryNames, error: categoryFetchError } = await supabase
    .from("categories")
    .select("name");

  const { data: tagNames, error: tagsFetchError } = await supabase
    .from("blog_posts")
    .select("tags");

  const tagsList = new Set(tagNames?.flatMap((tag) => tag.tags)) as Set<string>;

  return (
    <section className="flex gap-4 p-4 sm:p-8">
      <BlogPostListTagSelect tagsList={tagsList} />
      <BlogPostListCategorySelect categoryNames={categoryNames} />
    </section>
  );
};
