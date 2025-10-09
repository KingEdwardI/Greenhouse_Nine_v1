import React from "react";
import { Card } from "../Card";
import { Text } from "../Text";
import "./Message.css";

export interface MessageProps {
  children: React.ReactNode;
  variant?: "user" | "system" | "assistant";
  timestamp?: string;
  status?: "sending" | "sent" | "delivered" | "read";
  username?: string;
  className?: string;
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
      ...props
    },
    ref,
  ) => {
    const composedClassName = [
      "gn-Message",
      `gn-Message--${variant}`,
      status && `gn-Message--${status}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} className={composedClassName} {...props}>
        {username && variant !== "user" && (
          <Text size="sm" className="gn-Message__username">
            {username}
          </Text>
        )}
        <Card
          variant={variant === "user" ? "classic" : "surface"}
          size="sm"
          className="gn-Message__bubble"
        >
          <Text size="md" className="gn-Message__content">
            {children}
          </Text>
          {status && (
            <div className="gn-Message__status-wrapper">
              <div className="gn-Message__status" data-status={status} />
            </div>
          )}
        </Card>
        {timestamp && (
          <Text size="sm" className="gn-Message__timestamp">
            {timestamp}
          </Text>
        )}
      </div>
    );
  },
);

Message.displayName = "Message";

