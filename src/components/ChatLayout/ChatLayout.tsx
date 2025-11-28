import React from "react";
import { Message, type MessageProps } from "../Message";
import { MessageList, type MessageListProps } from "../MessageList";
import { MessageInput, type MessageInputProps } from "../MessageInput";
import "./ChatLayout.css";

export interface ChatLayoutMessage extends Omit<MessageProps, "children"> {
  id: string | number;
  content: React.ReactNode;
}

export interface ChatLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  messages?: ChatLayoutMessage[];
  onSend?: (message: string) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  status?: React.ReactNode;
  header?: React.ReactNode;
  headerActions?: React.ReactNode;
  toolbar?: React.ReactNode;
  footer?: React.ReactNode;
  sidebar?: React.ReactNode;
  sidebarPosition?: "left" | "right";
  showInput?: boolean;
  typingUsers?: string[];
  showTyping?: boolean;
  loading?: boolean;
  emptyState?: React.ReactNode;
  autoScroll?: boolean;
  messageListProps?: Omit<MessageListProps, "children">;
  messageInputProps?: Partial<MessageInputProps>;
  renderMessage?: (
    message: ChatLayoutMessage,
    index: number
  ) => React.ReactNode;
  inputArea?: React.ReactNode;
}

export const ChatLayout = React.forwardRef<HTMLDivElement, ChatLayoutProps>(
  (
    {
      messages = [],
      onSend,
      title,
      description,
      status,
      header,
      headerActions,
      toolbar,
      footer,
      sidebar,
      sidebarPosition = "right",
      showInput,
      typingUsers = [],
      showTyping,
      loading = false,
      emptyState,
      autoScroll = true,
      messageListProps,
      messageInputProps,
      renderMessage,
      inputArea,
      className,
      ...rest
    },
    ref
  ) => {
    const composedClassName = [
      "gn-ChatLayout",
      sidebar && "gn-ChatLayout--with-sidebar",
      sidebar &&
        sidebarPosition === "left" &&
        "gn-ChatLayout--sidebar-left",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const {
      className: listClassName,
      typingUsers: listTypingUsers,
      showTyping: listShowTyping,
      loading: listLoading,
      emptyState: listEmptyState,
      autoScroll: listAutoScroll,
      children: _ignoredChildren,
      ...restListProps
    } = messageListProps ?? {};

    const resolvedTypingUsers = listTypingUsers ?? typingUsers ?? [];
    const explicitShowTyping = listShowTyping ?? showTyping;
    const resolvedShowTyping =
      typeof explicitShowTyping === "boolean"
        ? explicitShowTyping
        : resolvedTypingUsers.length > 0;
    const resolvedLoading = listLoading ?? loading;
    const resolvedEmptyState = listEmptyState ?? emptyState;
    const resolvedAutoScroll = listAutoScroll ?? autoScroll;

    const listClasses = [
      "gn-ChatLayout__message-list",
      listClassName,
    ]
      .filter(Boolean)
      .join(" ");

    // Allow consumers to override how each message renders while keeping the default Message component fallback.
    const renderedMessages = messages.map((message, index) => {
      if (!renderMessage) {
        const { id, content, ...messageProps } = message;
        return (
          <Message key={id} {...messageProps}>
            {content}
          </Message>
        );
      }

      const customNode = renderMessage(message, index);

      if (React.isValidElement(customNode)) {
        return customNode.key == null
          ? React.cloneElement(customNode, { key: message.id })
          : customNode;
      }

      return <React.Fragment key={message.id}>{customNode}</React.Fragment>;
    });

    const resolvedShowInput =
      typeof showInput === "boolean"
        ? showInput
        : Boolean(onSend || messageInputProps?.onSend || inputArea);

    const inputClassName = [
      "gn-ChatLayout__message-input",
      messageInputProps?.className,
    ]
      .filter(Boolean)
      .join(" ");

    const mergedInputProps: MessageInputProps | undefined = inputArea
      ? undefined
      : {
          ...messageInputProps,
          placeholder: messageInputProps?.placeholder ?? "Type a message...",
          onSend: messageInputProps?.onSend ?? onSend,
          className: inputClassName || undefined,
        };

    return (
      <div ref={ref} className={composedClassName} {...rest}>
        <div className="gn-ChatLayout__conversation">
          {(header || title || description || status || headerActions) && (
            <div className="gn-ChatLayout__header">
              <div className="gn-ChatLayout__header-main">
                {header ?? (
                  <>
                    {title && (
                      <div className="gn-ChatLayout__title">{title}</div>
                    )}
                    {description && (
                      <div className="gn-ChatLayout__description">
                        {description}
                      </div>
                    )}
                  </>
                )}
              </div>
              {(status || headerActions) && (
                <div className="gn-ChatLayout__header-meta">
                  {status && (
                    <div className="gn-ChatLayout__status">{status}</div>
                  )}
                  {headerActions && (
                    <div className="gn-ChatLayout__actions">
                      {headerActions}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {toolbar && (
            <div className="gn-ChatLayout__toolbar">{toolbar}</div>
          )}

          <div className="gn-ChatLayout__messages">
            <MessageList
              {...restListProps}
              className={listClasses || undefined}
              typingUsers={resolvedTypingUsers}
              showTyping={resolvedShowTyping}
              loading={resolvedLoading}
              emptyState={resolvedEmptyState}
              autoScroll={resolvedAutoScroll}
            >
              {renderedMessages}
            </MessageList>
          </div>

          {footer && <div className="gn-ChatLayout__footer">{footer}</div>}

          {resolvedShowInput && (
            <div className="gn-ChatLayout__input">
              {inputArea ??
                (mergedInputProps && <MessageInput {...mergedInputProps} />)}
            </div>
          )}
        </div>

        {sidebar && <aside className="gn-ChatLayout__sidebar">{sidebar}</aside>}
      </div>
    );
  }
);

ChatLayout.displayName = "ChatLayout";

