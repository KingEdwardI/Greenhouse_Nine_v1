import type { Story } from "@ladle/react";
import { Message } from "./Message";
import type { MessageProps } from "./Message";

export default {
  title: "Chat/Message",
};

export const Default: Story<MessageProps> = (args) => (
  <div style={{ padding: "20px", background: "var(--gray-1)" }}>
    <Message {...args}>Hello, this is a test message!</Message>
  </div>
);

Default.args = {
  variant: "user",
  timestamp: "2:34 PM",
  status: "read",
  username: "John Doe",
};

export const UserMessages: Story = () => (
  <div
    style={{
      padding: "20px",
      background: "var(--gray-1)",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <Message variant="user" timestamp="2:32 PM" status="sending">
      This message is still sending...
    </Message>
    <Message variant="user" timestamp="2:33 PM" status="sent">
      This message was sent but not delivered yet.
    </Message>
    <Message variant="user" timestamp="2:34 PM" status="delivered">
      This message was delivered but not read.
    </Message>
    <Message variant="user" timestamp="2:35 PM" status="read">
      This message has been read!
    </Message>
  </div>
);

export const SystemMessages: Story = () => (
  <div
    style={{
      padding: "20px",
      background: "var(--gray-1)",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <Message variant="system" timestamp="2:30 PM">
      System notification message
    </Message>
    <Message variant="assistant" timestamp="2:31 PM" username="Assistant">
      Assistant response message with some longer content to show how it wraps
      and handles different lengths of text content.
    </Message>
  </div>
);

export const Conversation: Story = () => (
  <div
    style={{
      padding: "20px",
      background: "var(--gray-1)",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <Message variant="user" timestamp="2:30 PM" status="read">
      **Hey, can you help me with something?**
    </Message>
    <Message variant="assistant" timestamp="2:30 PM" username="Assistant">
      Of course! What do you need help with?
    </Message>
    <Message variant="user" timestamp="2:31 PM" status="read">
      I'm trying to understand how to implement a chat interface using React
      components.
    </Message>
    <Message variant="assistant" timestamp="2:31 PM" username="Assistant">
      That's a great question! A chat interface typically consists of several
      key components: message bubbles, an input area, and a scrollable message
      list. Each message should show who sent it, when it was sent, and
      potentially the delivery status.
    </Message>
  </div>
);

export const WithMarkdown: Story = () => (
  <div
    style={{
      padding: "20px",
      background: "var(--gray-1)",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <Message variant="user" timestamp="2:30 PM" status="read">
      Can you show me how to implement a TypeScript interface?
    </Message>
    <Message
      variant="assistant"
      timestamp="2:30 PM"
      username="Assistant"
      markdown
    >
      {`Sure! Here's an example of a TypeScript interface:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
\`\`\`

Key points about interfaces:

- They define the **shape** of an object
- Properties can be *optional* using \`?\`
- They support readonly properties
- They can extend other interfaces`}
    </Message>
    <Message variant="user" timestamp="2:31 PM" status="read">
      What about lists and tables?
    </Message>
    <Message
      variant="assistant"
      timestamp="2:31 PM"
      username="Assistant"
      markdown
    >
      {`Markdown supports both! Here's a comparison:

| Feature | Arrays | Objects |
|---------|--------|---------|
| Ordered | Yes | No |
| Key-Value | No | Yes |
| Iterable | Yes | Needs Object.keys() |

Unordered list:
- Arrays are ordered collections
- Objects are key-value pairs
- Both are essential in JavaScript

Ordered list:
1. Define your data structure
2. Implement the interface
3. Use it in your code`}
    </Message>
  </div>
);

export const MarkdownComparison: Story = () => (
  <div
    style={{
      padding: "20px",
      background: "var(--gray-1)",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <Message variant="assistant" timestamp="2:30 PM" username="Plain Text">
      This is a regular message without markdown. **Bold** and *italic* won't
      work here.
    </Message>
    <Message
      variant="assistant"
      timestamp="2:30 PM"
      username="Markdown"
      markdown
    >
      {`This is a message **with markdown**. Now the formatting works!

- You can use lists
- \`Inline code\`
- And much more!`}
    </Message>
  </div>
);

export const GlassVariants: Story = () => (
  <div
    style={{
      padding: "20px",
      background: "var(--gray-1)",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <Message variant="user" timestamp="2:30 PM" glass>
      Default glass message
    </Message>
    <Message variant="assistant" timestamp="2:30 PM" username="Assistant" glass glassColor="primary">
      Primary glass variant (Sea Green tint)
    </Message>
    <Message variant="user" timestamp="2:31 PM" glass glassColor="secondary">
      Secondary glass variant (Cerulean tint)
    </Message>
    <Message variant="assistant" timestamp="2:31 PM" username="Assistant" glass glassColor="accent">
      Accent glass variant (Purple tint)
    </Message>
    <Message variant="user" timestamp="2:32 PM" glass glassColor="success">
      Success glass variant (Mint tint)
    </Message>
    <Message variant="assistant" timestamp="2:32 PM" username="Assistant" glass glassColor="info">
      Info glass variant (Blue tint)
    </Message>
    <Message variant="user" timestamp="2:33 PM" glass glassColor="warning">
      Warning glass variant (Gold tint)
    </Message>
  </div>
);

export const GlassConversation: Story = () => (
  <div
    style={{
      padding: "20px",
      background: "linear-gradient(135deg, var(--gray-2) 0%, var(--gray-1) 100%)",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      minHeight: "400px",
    }}
  >
    <Message variant="user" timestamp="2:30 PM" status="read" glass>
      **Hey, check out this new glass effect!**
    </Message>
    <Message variant="assistant" timestamp="2:30 PM" username="Assistant" glass glassColor="primary">
      Wow! The glass effect looks amazing with the obsidian dark theme. Notice how it has that subtle shimmer?
    </Message>
    <Message variant="user" timestamp="2:31 PM" status="read" glass>
      Yes! And the text shadows make everything readable even with the transparency.
    </Message>
    <Message variant="assistant" timestamp="2:31 PM" username="Assistant" glass glassColor="primary">
      The unified architecture means all components use the same token system. Much cleaner and more maintainable!
    </Message>
  </div>
);

export const MixedContent: Story = () => (
  <div
    style={{
      padding: "20px",
      background: "var(--gray-1)",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <Message variant="assistant" timestamp="2:30 PM" username="Assistant">
      <div style={{ padding: "10px", background: "var(--blue-4)", borderRadius: "4px", marginBottom: "8px" }}>
        Custom Component Header
      </div>
      {`# Some regular markdown

- Lists should render correctly
- Things like this
- **Bold** and *italic* work too

Here's some \`inline code\` as well.`}
      <div style={{ padding: "10px", background: "var(--green-4)", borderRadius: "4px", marginTop: "8px" }}>
        Custom Component Footer
      </div>
    </Message>
    <Message variant="user" timestamp="2:31 PM">
      <button style={{ padding: "8px 16px", marginBottom: "8px", cursor: "pointer" }}>
        Click me!
      </button>
      {`You can also mix components with markdown in user messages:

1. First item
2. Second item
3. Third item`}
    </Message>
  </div>
);

