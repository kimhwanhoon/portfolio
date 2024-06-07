/* eslint-disable @next/next/no-img-element */
import { Skeleton } from "@mantine/core";
import { IconCalendar, IconUser } from "@tabler/icons-react";
import Link from "next/link";

const BlogPostLoading = () => {
  return (
    <main className="py-12 md:py-20">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 md:px-8 md:py-8 lg:py-10">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                data.title
              </h1>
              <div className="flex items-center gap-4 text-gray-500 ">
                <div className="flex items-center">
                  <IconUser className="mr-1 inline h-4 w-4" />
                  Hwanhoon Kim
                </div>
                <div className="flex items-center">
                  <IconCalendar className="mr-1 inline h-4 w-4" />
                  data.created_at!
                </div>
              </div>
            </div>

            <img
              src={""}
              width={600}
              height={400}
              alt={""}
              className="mt-4 h-48 w-full rounded-lg object-cover md:mt-0 md:h-32 md:w-auto"
            />
          </div>
        </div>
      </header>
      {/*  */}
      {/*  */}
      <div className="container mx-auto grid grid-cols-1 gap-8 py-8 sm:px-4 md:grid-cols-3 md:py-8 lg:py-12">
        <div className="prose prose-gray dark:prose-invert col-span-2 max-w-none">
          <section className="sm:p-4">
            <div>긴 글</div>
          </section>
        </div>
        <aside className="space-y-8">
          {/* related posts  */}
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="mb-4 text-lg font-bold">Related Posts</h3>
            <ul className="space-y-4">
              {[0, 1, 2].map((el, i) => (
                <li key={`recent-post-${i}`}>
                  <Link
                    href=""
                    className="flex items-center space-x-4"
                    prefetch={false}
                  >
                    <img
                      src=""
                      width={80}
                      height={60}
                      alt=""
                      className="h-15 w-20 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="text-base font-medium">
                        recentPost.title
                      </h4>
                      <p className="text-sm text-gray-500 ">
                        recentPost.created_at!
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* categories */}
          <div className="rounded-lg bg-white p-6 shadow ">
            <h3 className="mb-4 text-lg font-bold">Categories</h3>
            <ul className="space-y-2">
              {[0, 1, 2, 3, 4].map((el, i) => (
                <li key={i}>
                  <Link
                    href={""}
                    className="text-gray-500 hover:text-gray-900"
                    prefetch={false}
                  >
                    category.name
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* recent posts */}
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="mb-4 text-lg font-bold">Related Posts</h3>
            <ul className="space-y-4">
              {[0, 1, 2].map((el, i) => (
                <li key={`recent-post-${i}`}>
                  <Link
                    href=""
                    className="flex items-center space-x-4"
                    prefetch={false}
                  >
                    <img
                      src=""
                      width={80}
                      height={60}
                      alt=""
                      className="h-15 w-20 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="text-base font-medium">
                        recentPost.title
                      </h4>
                      <p className="text-sm text-gray-500 ">
                        recentPost.created_at!
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default BlogPostLoading;
