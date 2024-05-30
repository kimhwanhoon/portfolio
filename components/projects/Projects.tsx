import { ReactNode } from "react";

interface ProjectsProps {
  children: ReactNode;
}

export const Projects = ({ children }: ProjectsProps) => {
  return (
    <section className="flex justify-center py-8 md:py-16">
      <div className="container space-y-10 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400">
            Check out some of my latest and greatest web development projects.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </div>
    </section>
  );
};
