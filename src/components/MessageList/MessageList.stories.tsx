import type { Story } from "@ladle/react";
import { MessageList } from "./MessageList";
import { Message } from "../Message";
import type { MessageListProps } from "./MessageList";

export default {
  title: "Messaging - MessageList",
};

export const Default: Story<MessageListProps> = args => (
  <div style={{ height: "400px", display: "flex", flexDirection: "column" }}>
    <MessageList {...args}>
      <Message variant="system" timestamp="9:00 AM">
        Welcome to the chat!
      </Message>
      <Message variant="user" timestamp="9:01 AM" status="read">
        Hello everyone!
      </Message>
      <Message variant="assistant" timestamp="9:02 AM">
        Hi there! How can I help you today?
      </Message>
    </MessageList>
  </div>
);

export const LongConversation: Story = () => (
  <div style={{ height: "400px", display: "flex", flexDirection: "column" }}>
    <MessageList>
      <Message variant="system" timestamp="Yesterday">
        Chat started
      </Message>
      <Message variant="user" timestamp="9:00 AM" status="read">
        Good morning! I have a question about the project timeline.
      </Message>
      <Message variant="assistant" timestamp="9:01 AM">
        Good morning! I'd be happy to help you with questions about the project
        timeline. What specifically would you like to know?
      </Message>
      <Message variant="user" timestamp="9:03 AM" status="read">
        When do you think we'll be ready for the beta release?
      </Message>
      <Message variant="assistant" timestamp="9:04 AM">
        Based on our current progress, I estimate we should be ready for beta
        testing in about 2-3 weeks. We still need to complete the user
        authentication system and run thorough testing on the core features.
      </Message>
      <Message variant="user" timestamp="9:06 AM" status="read">
        That sounds reasonable. What are the main blockers we need to address?
      </Message>
      <Message variant="assistant" timestamp="9:07 AM">
        The main blockers are: 1. Finalizing the database schema for user
        profiles 2. Implementing OAuth integration for social login 3. Setting
        up automated testing pipelines 4. Performance optimization for the
        dashboard We're making good progress on items 1 and 3, but items 2 and 4
        will need more focused attention this week.
      </Message>
      <Message variant="user" timestamp="9:10 AM" status="delivered">
        Thanks for the detailed breakdown. I'll check in with the team about
        prioritizing the OAuth work.
      </Message>
      <Message variant="user" timestamp="9:11 AM" status="sending">
        Let me know if you need any resources or support to move these items
        forward.
      </Message>
    </MessageList>
  </div>
);

export const WithTyping: Story = () => (
  <div style={{ height: "400px", display: "flex", flexDirection: "column" }}>
    <MessageList showTyping={true} typingUsers={["Alice", "Bob"]}>
      <Message variant="user" timestamp="2:30 PM" status="read">
        Hey team, are we still on for the meeting at 3?
      </Message>
      <Message variant="assistant" timestamp="2:31 PM" username="Assistant">
        Yes, the meeting is still scheduled for 3 PM. I'll send out the agenda
        shortly.
      </Message>
      <Message variant="user" timestamp="2:32 PM" status="read">
        Perfect, looking forward to it!
      </Message>
    </MessageList>
  </div>
);

export const Loading: Story = () => (
  <div style={{ height: "400px", display: "flex", flexDirection: "column" }}>
    <MessageList loading={true}>
      <Message variant="system" timestamp="Loading...">
        Please wait while we load your conversation history...
      </Message>
    </MessageList>
  </div>
);

export const EmptyState: Story = () => (
  <div style={{ height: "400px", display: "flex", flexDirection: "column" }}>
    <MessageList>{/* No messages - should show empty state */}</MessageList>
  </div>
);

export const CustomEmptyState: Story = () => (
  <div style={{ height: "400px", display: "flex", flexDirection: "column" }}>
    <MessageList
      emptyState={
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            color: "var(--gray-9)",
          }}
        >
          <p style={{ fontSize: "18px", marginBottom: "8px" }}>
            Welcome to the chat!
          </p>
          <p style={{ fontSize: "14px" }}>
            Send your first message to get started.
          </p>
        </div>
      }
    >
      {/* No messages - should show custom empty state */}
    </MessageList>
  </div>
);

export const ChatInterface: Story = () => (
  <div
    style={{
      height: "500px",
      display: "flex",
      flexDirection: "column",
      border: "1px solid var(--gray-6)",
      borderRadius: "8px",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        padding: "12px",
        borderBottom: "1px solid var(--gray-6)",
        background: "var(--gray-2)",
      }}
    >
      <strong>Chat Room</strong>
    </div>
    <MessageList showTyping={true} typingUsers={["Assistant"]}>
      <Message variant="system" timestamp="Today">
        Welcome to the chat room!
      </Message>
      <Message variant="user" timestamp="2:30 PM" status="read">
        Hello! Can you help me understand how to use these new chat components?
      </Message>
      <Message variant="assistant" timestamp="2:31 PM" username="Assistant">
        Of course! The chat interface consists of several components: -
        **Message**: Individual message bubbles with user/system/assistant
        variants - **MessageList**: Container that handles scrolling and
        displays typing indicators - **MessageInput**: Input area with
        auto-resize and keyboard shortcuts - **TypingIndicator**: Shows when
        others are typing Each component follows the same patterns as other
        components in this design system.
      </Message>
      <Message variant="user" timestamp="2:33 PM" status="delivered">
        That's really helpful! The auto-scrolling works nicely too.
      </Message>
    </MessageList>
  </div>
);
