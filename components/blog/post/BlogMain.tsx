"use client";

import {
  useElementSize,
  useViewportSize,
  useWindowScroll,
} from "@mantine/hooks";
import { nprogress } from "@mantine/nprogress";
import React, { FC, useEffect } from "react";

interface BlogMainProps {
  children: React.ReactNode;
}

export const BlogMain: FC<BlogMainProps> = ({ children }) => {
  const { ref, height } = useElementSize();
  const { height: viewPortHeight } = useViewportSize();
  const [scroll] = useWindowScroll();

  useEffect(() => {
    // header 70px footer 133px(changeable)
    const totalHeight = height + 70 + 133 - viewPortHeight;
    const scrollHeight = scroll.y;
    const scrollIntoPercentage = (scrollHeight / totalHeight) * 100;
    nprogress.set(scrollIntoPercentage);
  }, [scroll, height, viewPortHeight]);

  useEffect(() => () => nprogress.reset(), []);

  return (
    <main ref={ref} className="min-h-[calc(100dvh-202px)]">
      {children}
    </main>
  );
};
