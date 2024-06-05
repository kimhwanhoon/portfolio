import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-[calc(100dvh-203px)] w-full flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Oops! Page not found.
        </h1>
        <p className="text-gray-500 md:text-xl dark:text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        prefetch={false}
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
