import React, { useState, useCallback } from "react";
import { Copy, Check } from "lucide-react";
import { Card } from "../Card";
import { Text } from "../Text";
import { MarkdownRenderer } from "../MarkdownRenderer";
import { ContextMenu, type ContextMenuItemData } from "../ContextMenu";
import "./Message.css";

export interface MessageProps {
  children: React.ReactNode;
  variant?: "user" | "system" | "assistant";
  timestamp?: string;
  status?: "sending" | "sent" | "delivered" | "read";
  username?: string;
  className?: string;
  markdown?: boolean;
  glass?: boolean;
  glassColor?:
    | "default"
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "info"
    | "warning";
  /** Optional callback when message is copied */
  onCopy?: () => void;
}

export const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  (
    {
      children,
      variant = "user",
      timestamp,
      status,
      username,
      className,
      markdown = true,
      glass = false,
      glassColor = "default",
      onCopy,
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false);

    // Extract raw content for copying - only works when children is a string
    const rawContent = typeof children === "string" ? children : "";

    const handleCopyMessage = useCallback(async () => {
      if (!rawContent) return;
      try {
        await navigator.clipboard.writeText(rawContent);
        setCopied(true);
        onCopy?.();
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy message:", err);
      }
    }, [rawContent, onCopy]);

    const contextMenuItems: ContextMenuItemData[] = rawContent
      ? [
          {
            id: "copy-message",
            label: "Copy message",
            icon: <Copy size={14} />,
            shortcut: "\u2318C",
          },
        ]
      : [];

    const composedClassName = [
      "gn-Message",
      `gn-Message--${variant}`,
      glass && "gn-Message--glass",
      glass && `gn-Message--glass-${glassColor}`,
      status && `gn-Message--${status}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // Process children to handle mixed content (components + markdown strings)
    const renderContent = () => {
      if (!markdown) {
        return (
          <Text size="2" className="gn-Message__content">
            {children}
          </Text>
        );
      }

      // If children is a simple string, render as markdown
      if (typeof children === "string") {
        return (
          <MarkdownRenderer className="gn-Message__content">
            {children}
          </MarkdownRenderer>
        );
      }

      // Handle mixed content (React components + strings)
      const childArray = React.Children.toArray(children);

      // Check if all children are strings
      const allStrings = childArray.every(child => typeof child === "string");

      if (allStrings) {
        // Concatenate all string children and render as markdown
        const content = childArray.join("");
        return (
          <MarkdownRenderer className="gn-Message__content">
            {content}
          </MarkdownRenderer>
        );
      }

      // Mixed content: render each child individually
      return (
        <div className="gn-Message__content">
          {childArray.map((child, index) => {
            if (typeof child === "string") {
              // Render string as markdown
              return <MarkdownRenderer key={index}>{child}</MarkdownRenderer>;
            }
            // Render React element as-is
            return <React.Fragment key={index}>{child}</React.Fragment>;
          })}
        </div>
      );
    };

    const renderCard = () => (
      <Card
        variant={variant === "user" ? "classic" : "surface"}
        size="1"
        className="gn-Message__bubble"
        glass={glass}
      >
        {rawContent && (
          <button
            className="gn-Message__copy-btn"
            onClick={e => {
              e.stopPropagation();
              handleCopyMessage();
            }}
            aria-label={copied ? "Copied" : "Copy message"}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        )}
        {renderContent()}
        {status && (
          <div className="gn-Message__status-wrapper">
            <div className="gn-Message__status" data-status={status} />
          </div>
        )}
      </Card>
    );

    return (
      <div ref={ref} className={composedClassName} {...props}>
        {username && variant !== "user" && (
          <Text size="1" className="gn-Message__username">
            {username}
          </Text>
        )}
        {rawContent ? (
          <ContextMenu
            items={contextMenuItems}
            onItemSelect={id => id === "copy-message" && handleCopyMessage()}
            glass={glass}
          >
            {renderCard()}
          </ContextMenu>
        ) : (
          renderCard()
        )}
        {timestamp && (
          <Text size="1" className="gn-Message__timestamp">
            {timestamp}
          </Text>
        )}
      </div>
    );
  }
);

Message.displayName = "Message";
