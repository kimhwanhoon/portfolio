import { Skeleton } from "@mantine/core";

const BlogPostsLoading = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="px-4 md:px-6">
        <div className="grid  grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div
                key={`blog-post-${i}`}
                className="hover-effect-mild-no-cursor-pointer overflow-hidden rounded-lg shadow-md"
              >
                <Skeleton
                  width={600}
                  height={250}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <div className="mb-2 flex items-center space-x-2">
                    <Skeleton width={32} height={32} circle />
                    <Skeleton height={12} radius={"xl"} width="30%" />
                  </div>

                  <Skeleton height={22} radius={"xl"} mb={6} />
                  <Skeleton height={22} radius={"xl"} width={"30%"} mb={15} />

                  <Skeleton height={12} mt={6} radius="xl" />
                  <Skeleton height={12} mt={6} radius="xl" />
                  <Skeleton height={12} mt={6} width="70%" radius="xl" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPostsLoading;
