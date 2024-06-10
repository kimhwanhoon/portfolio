import { createClient } from "@/lib/supabase/client";
import { BlogPostListTagSelect } from "./BlogPostListTagSelect";
import { BlogPostListCategorySelect } from "./BlogPostListCategorySelect";
import { BlogFilterConfirmButton } from "./BlogFilterConfirmButton";
import type { Database } from "@/types/database";
import { BlogFilterAscendingSwitch } from "./BlogFilterAscendingSwitch";

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
    <section className="space-y-4 p-4 sm:p-8 lg:w-1/3">
      <div className="flex flex-col gap-2 lg:gap-4">
        <BlogPostListTagSelect tags={tags} />
        <BlogPostListCategorySelect
          categoryNames={categoryNames as CategoryNames}
        />
        <BlogFilterAscendingSwitch />
      </div>
      <BlogFilterConfirmButton />
    </section>
  );
};
