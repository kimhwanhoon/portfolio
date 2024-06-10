"use client";

import { useBlogFilterStore } from "@/store/blog/useBlogFilterStore";
import { MultiSelect, MultiSelectProps } from "@mantine/core";
import Image from "next/image";
import React from "react";

interface BlogPostListCategorySelectProps {
  tags: string[];
}

export const BlogPostListTagSelect: React.FC<
  BlogPostListCategorySelectProps
> = ({ tags }) => {
  const { saveTags } = useBlogFilterStore();
  const multiSelectProps: MultiSelectProps = {
    label: "Tags",
    placeholder: "Select Tags",
    data: tags,
    searchable: true,
    hidePickedOptions: true,
    maxDropdownHeight: 200,
    comboboxProps: {
      transitionProps: { transition: "pop", duration: 200 },
      shadow: "md",
    },
    leftSection: (
      <Image src={"/blog/tags.svg"} alt="tag" width={16} height={16} />
    ),
    onChange: (e) => saveTags(e),
  };

  return (
    <>
      <MultiSelect className="w-full" {...multiSelectProps} />
    </>
  );
};
