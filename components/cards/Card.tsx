/* eslint-disable @next/next/no-img-element */
import { Badge } from "@mantine/core";
import Link from "next/link";
import React from "react";

export const Card = () => {
  return (
    <div className="group overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-2xl">
      <Link className="block" href="#">
        <img
          alt="Project 1"
          className="h-[200px] w-full object-cover transition-all group-hover:scale-105 md:h-[300px]"
          height={600}
          src="/placeholder.svg"
          style={{
            aspectRatio: "800/600",
            objectFit: "cover",
          }}
          width={800}
        />
        <div className="bg-white p-6 dark:bg-gray-950">
          <h3 className="text-xl font-semibold">Project 1</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            A modern and responsive web application built with React and
            Tailwind CSS.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">Tailwind CSS</Badge>
          </div>
        </div>
      </Link>
    </div>
  );
};
