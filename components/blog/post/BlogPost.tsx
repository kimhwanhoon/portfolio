"use client";

import { TypographyStylesProvider } from "@mantine/core";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { BlogPostType } from "@/types/blogPostType";

interface BlogPostProps {
  data: BlogPostType;
}

export const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  return (
    <TypographyStylesProvider>
      <section className="text-balance px-4 sm:p-4">
        <Markdown
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter PreTag="div" language={match[1]}>
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          {data.content}
        </Markdown>
      </section>
    </TypographyStylesProvider>
  );
};
