import { MultiSelect } from "@mantine/core";

import type { BlogPostType } from "@/types/blogPostType";
import Placeholder from "@tiptap/extension-placeholder";

interface BlogPostListTagSelectProps {
  totalPosts: BlogPostType[];
}

export const BlogPostListTagSelect: React.FC<BlogPostListTagSelectProps> = ({
  totalPosts,
}) => {
  const totalTagList = JSON.stringify(totalPosts.flatMap((el) => el.tags));
  const multiSelectProps = {
    label: "Tags",
    Placeholder: "Select Tag(s)",
    data: ["tag", "tag1"],
    searchable: true,
  };
  return (
    <>
      <MultiSelect className="w-full" {...multiSelectProps} />
      {totalTagList}
    </>
  );
};
