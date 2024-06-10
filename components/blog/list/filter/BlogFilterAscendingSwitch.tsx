"use client";
import { useBlogFilterStore } from "@/store/blog/useBlogFilterStore";
import { Switch } from "@mantine/core";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export const BlogFilterAscendingSwitch = () => {
  const { ascending, saveAscending } = useBlogFilterStore();
  const searchParams = useSearchParams();
  const isAscendingTrue =
    searchParams.get("ascending") === "true" ? true : false;

  useEffect(() => {
    saveAscending(isAscendingTrue);
  }, [isAscendingTrue, saveAscending]);

  return (
    <Switch
      className="py-2"
      label="Ascending"
      checked={ascending}
      onChange={(e) => saveAscending(e.currentTarget.checked)}
    />
  );
};
