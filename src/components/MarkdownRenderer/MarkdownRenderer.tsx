import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { CodeBlock } from "./CodeBlock";
import { Tooltip } from "../Tooltip";
import "./MarkdownRenderer.css";

export interface MarkdownRendererProps {
  children: string;
  className?: string;
}

export const MarkdownRenderer = React.forwardRef<
  HTMLDivElement,
  MarkdownRendererProps
>(({ children, className, ...props }, ref) => {
  const composedClassName = ["gn-MarkdownRenderer", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={composedClassName} {...props}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          pre: ({ children, ...preProps }) => (
            <CodeBlock {...preProps}>{children}</CodeBlock>
          ),
          table: ({ children }) => (
            <div className="gn-MarkdownRenderer__table-wrapper">
              <table>{children}</table>
            </div>
          ),
          a: ({ href, children }) => (
            <Tooltip content={href}>
              <a href={href}>{children}</a>
            </Tooltip>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
});

MarkdownRenderer.displayName = "MarkdownRenderer";
