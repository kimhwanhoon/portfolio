/* eslint-disable @next/next/no-img-element */
"use client";

import { dateFormatter } from "@/lib/blog/dateFormatter";
import { BlogPostType } from "@/types/blogPostType";
import { IconCalendar, IconUser } from "@tabler/icons-react";

interface BlogPostHeaderProps {
  data: BlogPostType;
}

export const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ data }) => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 md:px-8 md:py-8 lg:py-10">
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              {data.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-500 ">
              <div className="flex items-center">
                <IconUser className="mr-1 inline h-4 w-4" />
                Hwanhoon Kim
              </div>
              <div className="flex items-center">
                <IconCalendar className="mr-1 inline h-4 w-4" />
                {dateFormatter(data.created_at!)}
              </div>
            </div>
          </div>
          {data.featured_image && (
            <img
              src={data.featured_image}
              width={600}
              height={400}
              alt={data.title}
              className="mt-4 h-48 w-full rounded-lg object-cover md:mt-0 md:h-32 md:w-auto"
            />
          )}
        </div>
      </div>
    </header>
  );
};
