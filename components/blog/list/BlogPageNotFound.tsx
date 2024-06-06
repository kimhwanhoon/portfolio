import Link from "next/link";
import React from "react";

export const BlogPageNotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 md:px-6">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Oops! Data not found.
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          The requested data could not be found. Please check the URL or try
          again later.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Go to Homepage
        </Link>
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};
