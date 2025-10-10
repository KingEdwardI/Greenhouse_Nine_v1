import type { Story } from "@ladle/react";
import { GlassMessage } from "./GlassMessage";
import type { GlassMessageProps } from "./GlassMessage";
import { Button } from "../Button";

export default {
  title: "Chat/GlassMessage",
};

export const Default: Story<GlassMessageProps> = (args) => (
  <div
    style={{
      padding: "20px",
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      minHeight: "400px",
    }}
  >
    <GlassMessage {...args}>Hello, this is a glass message!</GlassMessage>
  </div>
);

Default.args = {
  variant: "user",
  timestamp: "2:34 PM",
  status: "read",
  username: "John Doe",
  glassColor: "primary",
};

export const ColorVariants: Story = () => (
  <div
    style={{
      padding: "20px",
      background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
      minHeight: "600px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <GlassMessage variant="user" glassColor="primary" timestamp="2:30 PM">
      Primary color - Sea Green
    </GlassMessage>
    <GlassMessage variant="assistant" glassColor="secondary" username="Bot" timestamp="2:31 PM">
      Secondary color - Cerulean Blue
    </GlassMessage>
    <GlassMessage variant="user" glassColor="accent" timestamp="2:32 PM">
      Accent color - Purple
    </GlassMessage>
    <GlassMessage variant="assistant" glassColor="success" username="Bot" timestamp="2:33 PM">
      Success color - Mint Green
    </GlassMessage>
    <GlassMessage variant="user" glassColor="info" timestamp="2:34 PM">
      Info color - Deep Blue
    </GlassMessage>
    <GlassMessage variant="assistant" glassColor="warning" username="Bot" timestamp="2:35 PM">
      Warning color - Gold
    </GlassMessage>
  </div>
);

export const Conversation: Story = () => (
  <div
    style={{
      padding: "20px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      minHeight: "600px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <GlassMessage variant="user" glassColor="primary" timestamp="2:30 PM" status="read">
      {`**Hey, can you help me with something?**`}
    </GlassMessage>
    <GlassMessage variant="assistant" glassColor="secondary" username="Assistant" timestamp="2:30 PM">
      Of course! What do you need help with?
    </GlassMessage>
    <GlassMessage variant="user" glassColor="primary" timestamp="2:31 PM" status="read">
      {`I'm trying to understand how glassmorphism works in UI design.`}
    </GlassMessage>
    <GlassMessage variant="assistant" glassColor="secondary" username="Assistant" timestamp="2:31 PM">
      {`Glassmorphism is a design trend that creates a frosted glass effect. Key characteristics include:

- **Transparency** with blur effects
- Subtle borders with light colors
- Layered shadows for depth
- Vibrant background gradients

It works best with colorful backgrounds!`}
    </GlassMessage>
  </div>
);

export const WithMarkdown: Story = () => (
  <div
    style={{
      padding: "20px",
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      minHeight: "600px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <GlassMessage variant="user" glassColor="info" timestamp="2:30 PM" status="read">
      Can you show me how to implement a TypeScript interface?
    </GlassMessage>
    <GlassMessage
      variant="assistant"
      glassColor="accent"
      username="Assistant"
      timestamp="2:30 PM"
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
    </GlassMessage>
  </div>
);

export const MixedContent: Story = () => (
  <div
    style={{
      padding: "20px",
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      minHeight: "600px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <GlassMessage variant="assistant" glassColor="success" username="Assistant" timestamp="2:30 PM">
      <div style={{ padding: "10px", background: "rgba(255, 255, 255, 0.1)", borderRadius: "4px", marginBottom: "8px", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
        Custom Component Header
      </div>
      {`# Glass with mixed content

- Lists render with glass effect
- **Bold** and *italic* text works
- Components blend seamlessly

Here's some \`inline code\` as well.`}
      <Button variant="soft" size="sm" style={{ marginTop: "8px" }}>
        Click me!
      </Button>
    </GlassMessage>
    <GlassMessage variant="user" glassColor="primary" timestamp="2:31 PM">
      <Button variant="soft" size="sm" style={{ marginBottom: "8px" }}>
        Interactive Button
      </Button>
      {`You can also mix components with markdown:

1. First item
2. Second item
3. Third item`}
    </GlassMessage>
  </div>
);

export const StatusIndicators: Story = () => (
  <div
    style={{
      padding: "20px",
      background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      minHeight: "600px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <GlassMessage variant="user" glassColor="warning" timestamp="2:32 PM" status="sending">
      This message is still sending...
    </GlassMessage>
    <GlassMessage variant="user" glassColor="warning" timestamp="2:33 PM" status="sent">
      This message was sent but not delivered yet.
    </GlassMessage>
    <GlassMessage variant="user" glassColor="warning" timestamp="2:34 PM" status="delivered">
      This message was delivered but not read.
    </GlassMessage>
    <GlassMessage variant="user" glassColor="warning" timestamp="2:35 PM" status="read">
      This message has been read!
    </GlassMessage>
  </div>
);

export const DarkGradient: Story = () => (
  <div
    style={{
      padding: "20px",
      background: "linear-gradient(135deg, #434343 0%, #000000 100%)",
      minHeight: "600px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <GlassMessage variant="user" glassColor="primary" timestamp="2:30 PM" status="read">
      Glass messages work great on dark backgrounds too!
    </GlassMessage>
    <GlassMessage variant="assistant" glassColor="accent" username="Assistant" timestamp="2:31 PM">
      {`The frosted glass effect creates subtle depth and elegance.

- Backdrop blur: \`12px\`
- Transparency with color tinting
- Layered box shadows`}
    </GlassMessage>
  </div>
);

export const LightGradient: Story = () => (
  <div
    style={{
      padding: "20px",
      background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      minHeight: "600px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <GlassMessage variant="user" glassColor="info" timestamp="2:30 PM" status="read">
      And on light backgrounds with warm tones!
    </GlassMessage>
    <GlassMessage variant="assistant" glassColor="secondary" username="Assistant" timestamp="2:31 PM">
      {`The glass effect adapts to any background:

- **Vibrant** gradients
- *Subtle* neutrals
- Dark or light themes`}
    </GlassMessage>
  </div>
);
