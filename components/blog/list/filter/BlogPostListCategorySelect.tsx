"use client";

import { Database } from "@/types/database";
import { MultiSelect, MultiSelectProps } from "@mantine/core";
import Image from "next/image";
import React from "react";

interface BlogPostListCategorySelectProps {
  categoryNames: Array<Database["public"]["Tables"]["categories"]["Row"]>;
}

export const BlogPostListCategorySelect: React.FC<
  BlogPostListCategorySelectProps
> = ({ categoryNames }) => {
  console.log(categoryNames);
  const categories = categoryNames.flatMap((category) => category.name);
  const multiSelectProps: MultiSelectProps = {
    label: "Categories",
    placeholder: "Select Category",
    data: categories,
    searchable: true,
    hidePickedOptions: true,
    maxDropdownHeight: 200,
    comboboxProps: {
      transitionProps: { transition: "pop", duration: 200 },
      shadow: "md",
    },
    leftSection: (
      <Image src={"/blog/category.svg"} alt="tag" width={16} height={16} />
    ),
    // onChange: (e) => saveCategories(e),
  };

  return (
    <>
      <MultiSelect className="w-full" {...multiSelectProps} />
    </>
  );
};
