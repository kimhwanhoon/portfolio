"use client";

import { Button } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex h-[calc(100dvh-203px)] w-full flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Oops! Page not found.
        </h1>
        <p className="text-gray-500 md:text-xl dark:text-gray-400">
          {"The page you're looking for doesn't exist or has been moved."}
        </p>
      </div>
      <div className="flex justify-center gap-2">
        <Button color="black" component={Link} href="/" prefetch={false}>
          Go back home
        </Button>
        <Button variant="outline" color="black" onClick={() => router.back()}>
          Go back
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
