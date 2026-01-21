import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export interface CodeBlockProps {
  children?: React.ReactNode;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  className,
  ...props
}) => {
  const [copied, setCopied] = useState(false);

  // Extract the code element from children
  const codeElement = React.Children.toArray(children).find(
    (child): child is React.ReactElement =>
      React.isValidElement(child) && child.type === "code"
  );

  // Extract language from code element's className (e.g., "language-typescript")
  const codeClassName =
    (codeElement?.props as { className?: string })?.className ?? "";
  const languageMatch = codeClassName.match(/language-(\w+)/);
  const language = languageMatch ? languageMatch[1] : null;

  // Extract raw code content
  const rawCode = String(
    (codeElement?.props as { children?: React.ReactNode })?.children ?? ""
  ).replace(/\n$/, "");

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(rawCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="gn-CodeBlock">
      <div className="gn-CodeBlock__header">
        {language && (
          <span className="gn-CodeBlock__language">{language}</span>
        )}
        <button
          type="button"
          className="gn-CodeBlock__copy-btn"
          onClick={handleCopy}
          aria-label={copied ? "Copied" : "Copy code"}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className={className} {...props}>
        {children}
      </pre>
    </div>
  );
};

CodeBlock.displayName = "CodeBlock";
