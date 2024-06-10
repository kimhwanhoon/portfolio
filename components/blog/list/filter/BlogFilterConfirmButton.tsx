"use client";
import { useBlogFilterStore } from "@/store/blog/useBlogFilterStore";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";

export const BlogFilterConfirmButton = () => {
  const { categories, tags } = useBlogFilterStore();
  const router = useRouter();
  const clickHandler = () => {
    const tagsUrl = tags.length > 0 ? `&tags=${tags}` : "";
    const categoriesUrl =
      categories.length > 0 ? `&categories=${categories}` : "";
    router.push(`/blog?page=1` + tagsUrl + categoriesUrl);
  };
  return (
    <Button fullWidth onClick={clickHandler}>
      Confirm
    </Button>
  );
};
