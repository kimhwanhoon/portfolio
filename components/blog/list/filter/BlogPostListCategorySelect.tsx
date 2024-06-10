"use client";

import { createClient } from "@/lib/supabase/client";
import { useBlogPostCategoryStore } from "@/store/blog/useBlogPostCategoryStore";
import { MultiSelect, MultiSelectProps } from "@mantine/core";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const BlogPostListCategorySelect = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const { saveCategories } = useBlogPostCategoryStore();
  useEffect(() => {
    const getCategories = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.from("categories").select("*");
      if (error) {
        setCategories([]);
      } else {
        const categoryNames = data.map((category) => category.name);
        setCategories(categoryNames);
      }
    };
    getCategories();
  }, []);

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
    onChange: (e) => saveCategories(e),
  };

  return (
    <>
      <MultiSelect className="w-full" {...multiSelectProps} />
    </>
  );
};
