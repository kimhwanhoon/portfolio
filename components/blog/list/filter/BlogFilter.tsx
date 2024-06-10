import { createClient } from "@/lib/supabase/client";
import { BlogPostListTagSelect } from "./BlogPostListTagSelect";
import { BlogPostListCategorySelect } from "./BlogPostListCategorySelect";
import { BlogFilterConfirmButton } from "./BlogFilterConfirmButton";
import type { Database } from "@/types/database";

type CategoryNames = Array<Database["public"]["Tables"]["categories"]["Row"]>;

export const BlogFilter: React.FC = async () => {
  const supabase = createClient({ cached: true });
  const { data: categoryNames, error: categoryFetchError } = await supabase
    .from("categories")
    .select("name");

  const { data: tagNames, error: tagsFetchError } = await supabase
    .from("blog_posts")
    .select("tags");

  const tagsList = new Set(tagNames?.flatMap((tag) => tag.tags)) as Set<string>;
  const tags = Array.from(tagsList);
  return (
    <section className="space-y-2 p-4 sm:p-8 lg:w-1/3 lg:space-y-4">
      <div className="flex flex-row gap-4 lg:flex-col">
        <BlogPostListTagSelect tags={tags} />
        <BlogPostListCategorySelect
          categoryNames={categoryNames as CategoryNames}
        />
      </div>
      <BlogFilterConfirmButton />
    </section>
  );
};
