import React, { useState, useRef, useEffect } from "react";
import { TextArea } from "../TextArea";
import { Button } from "../Button";
import "./MessageInput.css";

export interface MessageInputProps {
  placeholder?: string;
  onSend?: (message: string) => void;
  disabled?: boolean;
  loading?: boolean;
  maxRows?: number;
  className?: string;
}

export const MessageInput = React.forwardRef<
  HTMLTextAreaElement,
  MessageInputProps
>(
  (
    {
      placeholder = "Type a message...",
      onSend,
      disabled = false,
      loading = false,
      maxRows = 4,
      className,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState("");
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const composedClassName = ["gn-MessageInput", className]
      .filter(Boolean)
      .join(" ");

    const handleSubmit = () => {
      if (value.trim() && onSend && !disabled && !loading) {
        onSend(value.trim());
        setValue("");
        // Reset textarea height
        if (textAreaRef.current) {
          textAreaRef.current.style.height = "auto";
        }
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);

      // Auto-resize textarea
      const textarea = e.target;
      textarea.style.height = "auto";
      const scrollHeight = textarea.scrollHeight;
      const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
      const maxHeight = lineHeight * maxRows;
      textarea.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
    };

    // Set the ref on the textarea
    useEffect(() => {
      if (textAreaRef.current && ref) {
        if (typeof ref === "function") {
          ref(textAreaRef.current);
        } else {
          ref.current = textAreaRef.current;
        }
      }
    }, [ref]);

    return (
      <div className={composedClassName} {...props}>
        <TextArea
          ref={textAreaRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled || loading}
          className="gn-MessageInput__textarea"
          rows={1}
          style={{
            resize: "none",
            overflow: "auto",
            minHeight: "40px",
          }}
        />
        <Button
          onClick={handleSubmit}
          disabled={disabled || loading || !value.trim()}
          loading={loading}
          size="1"
          className="gn-MessageInput__button"
        >
          Send
        </Button>
      </div>
    );
  },
);

MessageInput.displayName = "MessageInput";

