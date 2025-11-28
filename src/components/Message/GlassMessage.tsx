import React from "react";
import { Text } from "../Text";
import { MarkdownRenderer } from "../MarkdownRenderer";
import "./GlassMessage.css";

/**
 * @deprecated Use Message component with glass prop instead.
 * GlassMessage will be removed in the next major version.
 *
 * Migration guide:
 * - Replace <GlassMessage glassColor="primary"> with <Message glass glassColor="primary">
 * - All props remain the same
 */

export interface GlassMessageProps {
  children: React.ReactNode;
  variant?: "user" | "system" | "assistant";
  timestamp?: string;
  status?: "sending" | "sent" | "delivered" | "read";
  username?: string;
  className?: string;
  markdown?: boolean;
  glassColor?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "info"
    | "warning";
}

export const GlassMessage = React.forwardRef<HTMLDivElement, GlassMessageProps>(
  (
    {
      children,
      variant = "user",
      timestamp,
      status,
      username,
      className,
      markdown = true,
      glassColor = "primary",
      ...props
    },
    ref
  ) => {
    const composedClassName = [
      "gn-GlassMessage",
      `gn-GlassMessage--${variant}`,
      `gn-GlassMessage--${glassColor}`,
      status && `gn-GlassMessage--${status}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // Process children to handle mixed content (components + markdown strings)
    const renderContent = () => {
      if (!markdown) {
        return (
          <Text size="2" className="gn-GlassMessage__content">
            {children}
          </Text>
        );
      }

      // If children is a simple string, render as markdown
      if (typeof children === "string") {
        return (
          <MarkdownRenderer className="gn-GlassMessage__content">
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
          <MarkdownRenderer className="gn-GlassMessage__content">
            {content}
          </MarkdownRenderer>
        );
      }

      // Mixed content: render each child individually
      return (
        <div className="gn-GlassMessage__content">
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

    return (
      <div ref={ref} className={composedClassName} {...props}>
        {username && variant !== "user" && (
          <Text size="1" className="gn-GlassMessage__username">
            {username}
          </Text>
        )}
        <div className="gn-GlassMessage__bubble">
          {renderContent()}
          {status && (
            <div className="gn-GlassMessage__status-wrapper">
              <div className="gn-GlassMessage__status" data-status={status} />
            </div>
          )}
        </div>
        {timestamp && (
          <Text size="1" className="gn-GlassMessage__timestamp">
            {timestamp}
          </Text>
        )}
      </div>
    );
  }
);

GlassMessage.displayName = "GlassMessage";
