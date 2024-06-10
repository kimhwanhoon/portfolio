"use client";

import { Button } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ErrorProps {
  title: string;
  subtitle: string;
}

export const Error: React.FC<ErrorProps> = ({ title, subtitle }) => {
  const router = useRouter();
  return (
    <div className="flex h-[calc(100dvh-202px)] w-full flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="text-gray-500 md:text-xl">{subtitle}</p>
      </div>
      <div className="flex justify-center gap-2">
        <Button component={Link} href="/" prefetch={false}>
          Go back home
        </Button>
        <Button variant="outline" color="black" onClick={() => router.back()}>
          Go back
        </Button>
      </div>
    </div>
  );
};
