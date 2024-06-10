"use client";

import { MultiSelect } from "@mantine/core";

interface BlogPostListTagSelectProps {
  tagsList: Set<string>;
}

export const BlogPostListTagSelect: React.FC<BlogPostListTagSelectProps> = ({
  tagsList,
}) => {
  const multiSelectProps = {
    label: "Tags",
    placeholder: "Select Tag(s)",
    data: Array.from(tagsList),
    searchable: true,
  };
  return (
    <>
      <MultiSelect className="w-full" {...multiSelectProps} />
      {/* {totalTagList} */}
    </>
  );
};
