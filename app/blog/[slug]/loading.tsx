/* eslint-disable @next/next/no-img-element */
import { Skeleton } from "@mantine/core";

const BlogPostLoading = () => {
  return (
    <main className="py-12 md:py-20">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 md:px-8 md:py-8 lg:py-10">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-4">
            <div className="flex w-full flex-col gap-2 md:gap-12">
              <Skeleton height={22} radius={"xl"} width="100%" />
              <Skeleton height={22} radius={"xl"} width="30%" />
              <Skeleton height={22} radius={"xl"} width="30%" />
            </div>

            <Skeleton height={150} radius={"xl"} width="60%" />
          </div>
        </div>
      </header>
      {/*  */}
      {/*  */}
      <div className="container mx-auto grid grid-cols-1 gap-8 py-8 sm:px-4 md:grid-cols-3 md:py-8 lg:py-12">
        <div className="prose prose-gray dark:prose-invert col-span-2 max-w-none">
          <section className="flex flex-col gap-2 sm:p-4">
            <Skeleton height={25} radius={"xl"} width="80%" />
            <Skeleton height={22} radius={"xl"} width="60%" />

            <Skeleton height={16} radius={"xl"} width="90%" mt={16} />
            {Array(16)
              .fill(0)
              .map((_, i) => (
                <Skeleton
                  key={`text-skeleton-${i}`}
                  height={12}
                  radius={"xl"}
                  width="90%"
                  mt={6}
                />
              ))}
            <Skeleton height={12} radius={"xl"} width="60%" mt={6} />
          </section>
        </div>
        <aside className="space-y-8">
          {/* related posts  */}
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="mb-4 text-lg font-bold">Related Posts</h3>
            <ul className="space-y-4">
              {[0, 1, 2].map((el, i) => (
                <li key={`recent-post-${i}`}>
                  <div className="flex items-center space-x-4">
                    <Skeleton width={80} height={60} />
                    <div className="flex w-full flex-col">
                      <Skeleton height={16} radius={"xl"} width="60%" mt={6} />
                      <Skeleton height={16} radius={"xl"} width="80%" mt={6} />
                    </div>
                  </div>
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
                  <Skeleton height={18} radius={"xl"} width="80%" mt={14} />
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
                  <div className="flex items-center space-x-4">
                    <Skeleton width={80} height={60} />
                    <div className="flex w-full flex-col">
                      <Skeleton height={16} radius={"xl"} width="60%" mt={6} />
                      <Skeleton height={16} radius={"xl"} width="80%" mt={6} />
                    </div>
                  </div>
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
