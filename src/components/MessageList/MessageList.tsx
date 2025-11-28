import React, { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import { TypingIndicator } from "../TypingIndicator";
import { Text } from "../Text";
import "./MessageList.css";

export interface MessageListProps {
  children?: React.ReactNode;
  loading?: boolean;
  autoScroll?: boolean;
  showTyping?: boolean;
  typingUsers?: string[];
  emptyState?: React.ReactNode;
  className?: string;
}

export const MessageList = React.forwardRef<HTMLDivElement, MessageListProps>(
  (
    {
      children,
      loading = false,
      autoScroll = true,
      showTyping = false,
      typingUsers = [],
      emptyState,
      className,
      ...props
    },
    ref
  ) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const composedClassName = ["gn-MessageList", className]
      .filter(Boolean)
      .join(" ");

    // Check if children is empty (no messages)
    const hasMessages = React.Children.count(children) > 0;

    // Auto-scroll to bottom when new messages are added
    useEffect(() => {
      if (autoScroll && scrollRef.current) {
        const scrollElement = scrollRef.current;
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }, [children, autoScroll, showTyping]);

    // Set ref
    useEffect(() => {
      if (scrollRef.current && ref) {
        if (typeof ref === "function") {
          ref(scrollRef.current);
        } else {
          ref.current = scrollRef.current;
        }
      }
    }, [ref]);

    const defaultEmptyState = (
      <div className="gn-MessageList__empty">
        <MessageCircle size={48} className="gn-MessageList__empty-icon" />
        <Text size="3" className="gn-MessageList__empty-text">
          No messages yet
        </Text>
        <Text size="1" className="gn-MessageList__empty-subtext">
          Start a conversation!
        </Text>
      </div>
    );

    return (
      <div ref={scrollRef} className={composedClassName} {...props}>
        <div className="gn-MessageList__content">
          {loading && (
            <div className="gn-MessageList__loading">
              <div className="gn-MessageList__spinner" />
              <span>Loading messages...</span>
            </div>
          )}
          {!loading && !hasMessages && (emptyState || defaultEmptyState)}
          {hasMessages && children}
          {showTyping && typingUsers.length > 0 && (
            <div className="gn-MessageList__typing">
              <TypingIndicator users={typingUsers} />
            </div>
          )}
        </div>
      </div>
    );
  }
);

MessageList.displayName = "MessageList";
