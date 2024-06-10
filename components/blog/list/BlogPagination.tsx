"use client";

import { Pagination } from "@mantine/core";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface BlogPaginationProps {
  totalPostsNumber: number;
}

export const BlogPagination: React.FC<BlogPaginationProps> = ({
  totalPostsNumber,
}) => {
  const searchParams = useSearchParams();
  const pageNumber: number = Number(searchParams.get("page"));
  const router = useRouter();

  const [pageValue, setPageValue] = useState<number>(pageNumber);

  useEffect(() => {
    setPageValue(pageNumber);
  }, [pageNumber]);

  return (
    <>
      <div className="h-8 sm:h-16"></div>
      <div className="absolute bottom-0 w-full py-4">
        <Pagination
          classNames={{ root: "flex justify-center" }}
          total={Math.ceil(totalPostsNumber / 6)}
          value={pageValue}
          onChange={(e) => router.push(`/blog?page=${e}`)}
        />
      </div>
    </>
  );
};
