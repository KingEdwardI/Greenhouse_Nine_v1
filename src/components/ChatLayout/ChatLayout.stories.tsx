import React from "react";
import type { Story } from "@ladle/react";
import { ChatLayout, type ChatLayoutMessage } from "./ChatLayout";
import { Message } from "../Message";
import { Button } from "../Button";
import { Text } from "../Text";

export default {
  title: "Messaging - ChatLayout",
};

const initialMessages: ChatLayoutMessage[] = [
  {
    id: "1",
    variant: "system",
    timestamp: "9:00 AM",
    content: "Conversation started",
  },
  {
    id: "2",
    variant: "user",
    timestamp: "9:02 AM",
    status: "read",
    content: "Hey there! I’d love more info about the launch timeline.",
  },
  {
    id: "3",
    variant: "assistant",
    timestamp: "9:03 AM",
    username: "Greenhouse",
    content:
      "Happy to help! We’re wrapping up polish this week, then QA next week. Target launch is the 15th.",
  },
  {
    id: "4",
    variant: "user",
    timestamp: "9:05 AM",
    status: "delivered",
    content: "Perfect, thanks. Can you add me to the beta list?",
  },
];

const containerStyle: React.CSSProperties = {
  height: "600px",
  maxWidth: "960px",
};

const generateMessageId = (): string => {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

export const Default: Story = () => {
  const [messages, setMessages] =
    React.useState<ChatLayoutMessage[]>(initialMessages);

  const handleSend = (value: string) => {
    setMessages(prev => [
      ...prev,
      {
        id: generateMessageId(),
        variant: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        status: "sending",
        content: value,
      },
    ]);
  };

  return (
    <div style={containerStyle}>
      <ChatLayout
        title="Product Support"
        description="Ask the Greenhouse assistant anything about your workspace."
        status={<span style={{ color: "var(--green-9)" }}>Online</span>}
        messages={messages}
        onSend={handleSend}
        typingUsers={["Greenhouse"]}
        showTyping
        footer={
          <Text size="1" color="gray">
            Tip: Press Enter to send and Shift+Enter for a new line.
          </Text>
        }
      />
    </div>
  );
};

export const WithSidebar: Story = () => (
  <div style={containerStyle}>
    <ChatLayout
      title="Workspace Chat"
      description="Channel #product-launch"
      status={<span style={{ color: "var(--gray-10)" }}>4 members</span>}
      toolbar={
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <Button size="1" variant="soft">
            Share
          </Button>
          <Button size="1" variant="ghost" color="gray">
            Archive
          </Button>
        </div>
      }
      sidebar={
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <Text size="2" weight="bold">
              Participants
            </Text>
            <ul
              style={{ marginTop: "8px", paddingLeft: "16px", lineHeight: 1.6 }}
            >
              <li>Eddie (you)</li>
              <li>Greenhouse Assistant</li>
              <li>Amanda</li>
              <li>Leo</li>
            </ul>
          </div>
          <div>
            <Text size="2" weight="bold">
              Conversation Notes
            </Text>
            <Text size="1" color="gray">
              The beta preview opens next Monday. Capture questions so the team
              can review during standup.
            </Text>
          </div>
        </div>
      }
      footer={
        <Text size="1" color="gray">
          Messages are retained for 30 days.
        </Text>
      }
      messages={initialMessages}
      onSend={() => undefined}
    />
  </div>
);

export const SidebarLeft: Story = () => (
  <div style={containerStyle}>
    <ChatLayout
      title="Studio Concierge"
      description="Live chat with the concierge team."
      status={
        <span style={{ color: "var(--green-9)" }}>
          Typically replies in 2 min
        </span>
      }
      sidebarPosition="left"
      sidebar={
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div>
            <Text size="2" weight="bold">
              Concierge Tips
            </Text>
            <Text size="1" color="gray">
              Drop files or screenshots directly into the composer. The left
              sidebar is perfect for workflows that need a persistent checklist
              or knowledge base.
            </Text>
          </div>
          <div>
            <Text size="2" weight="bold">
              Quick Actions
            </Text>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <Button size="1" variant="soft">
                Summarize Thread
              </Button>
              <Button size="1" variant="ghost" color="gray">
                Share Transcript
              </Button>
            </div>
          </div>
        </div>
      }
      footer={
        <Text size="1" color="gray">
          Concierge is available 24/7.
        </Text>
      }
      messages={initialMessages}
      onSend={() => undefined}
    />
  </div>
);

export const CustomRenderer: Story = () => (
  <div style={containerStyle}>
    <ChatLayout
      title="Glass Chat"
      description="Messages rendered with custom glass bubbles."
      messages={initialMessages}
      showInput={false}
      renderMessage={message => (
        <React.Fragment key={message.id}>
          <Message
            variant={message.variant}
            timestamp={message.timestamp}
            status={message.status}
            username={message.username}
            glass
            glassColor={message.variant === "assistant" ? "info" : "primary"}
          >
            {message.content}
          </Message>
          {message.timestamp && (
            <Text
              size="1"
              color="gray"
              style={{ marginBottom: "var(--space-2)" }}
            >
              Logged at {message.timestamp}
            </Text>
          )}
        </React.Fragment>
      )}
    />
  </div>
);
