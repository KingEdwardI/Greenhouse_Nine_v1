# Greenhouse Nine

A comprehensive React component library built on [Radix UI Themes](https://www.radix-ui.com/themes) with custom styling, design tokens, and enhanced components.

## Features

- **Built on Radix UI** - Leverages the accessibility and customization of Radix UI Themes
- **TypeScript First** - Full type safety with exported TypeScript definitions
- **Custom Design System** - Thoughtfully designed tokens for colors, typography, and spacing
- **Form Components** - Rich set of form inputs including masked inputs, date pickers, and comboboxes
- **Message/Chat Components** - Pre-built components for messaging interfaces
- **Markdown Support** - Built-in markdown rendering with syntax highlighting
- **Dark Mode** - Optimized for dark themes with green accent by default
- **Tree-Shakeable** - ES modules with selective imports for optimal bundle size

## Installation

```bash
pnpm add @highwind/greenhouse-nine
# or
npm install @highwind/greenhouse-nine
# or
yarn add @highwind/greenhouse-nine
```

### Peer Dependencies

Greenhouse Nine requires React 19+:

```bash
pnpm add react react-dom
```

## Quick Start

### 1. Wrap your app with ThemeProvider

```tsx
import { ThemeProvider } from "@highwind/greenhouse-nine";
import "@highwind/greenhouse-nine/style.css";

function App() {
  return <ThemeProvider>{/* Your app content */}</ThemeProvider>;
}
```

### 2. Import and use components

```tsx
import { Button, Input, Card } from "@highwind/greenhouse-nine";

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter your name" />
      <Button size="md">Submit</Button>
    </Card>
  );
}
```

## Component Categories

### Form Components

- **Input** - Text, password, number, and masked input variants
- **TextArea** - Multi-line text input
- **Select** - Dropdown selection
- **Checkbox** - Checkbox with label
- **RadioGroup** - Radio button group
- **Switch** - Toggle switch
- **DatePicker** - Date selection with calendar
- **Combobox** - Searchable select/autocomplete
- **Field** - Form field wrapper with label and validation
- **Label** - Form labels

### Layout & Display

- **Card** - Content containers
- **Dialog** - Modal dialogs
- **Tooltip** - Contextual tooltips
- **Dropdown** - Dropdown menus
- **ContextMenu** - Right-click context menus

### Typography

- **Text** - Body text with variants
- **Heading** - Headings (h1-h6)

### Messaging Components

- **Message** - Individual message display
- **MessageInput** - Message input field
- **MessageList** - Scrollable message container
- **TypingIndicator** - Animated typing indicator
- **MarkdownRenderer** - Markdown content with syntax highlighting

### Feedback

- **Toast** - Toast notifications via `ToastProvider` and `useToast`

### Utilities

- **ColorPalette** - Design system color viewer
- **ThemeProvider** - Theme configuration wrapper

### Re-exported Radix Components

All non-overridden Radix UI components are available:

- Layout: `Container`, `Section`, `Box`, `Flex`, `Grid`
- Typography: `Em`, `Strong`, `Code`, `Kbd`, `Quote`, `Link`, `Blockquote`
- Data: `Table`, `DataList`, `Badge`, `Avatar`
- Feedback: `Spinner`, `Skeleton`, `Progress`
- Navigation: `Tabs`, `TabNav`, `ScrollArea`
- Overlays: `Popover`, `HoverCard`, `AlertDialog`, `DropdownMenu`
- Form: `Slider`, `SegmentedControl`, `TextField`, `Radio`
- And more...

See [Radix Themes docs](https://www.radix-ui.com/themes/docs) for full details.

## Design Tokens

Greenhouse Nine includes a comprehensive set of design tokens exported from `@highwind/greenhouse-nine/tokens`:

```tsx
import { colors } from "@highwind/greenhouse-nine";

// Access color tokens
const myColor = colors.emerald; // '#93B97A'
```

Available token categories:

- **colors** - Full color palette (neutrals, accent colors, etc.)

## Usage Examples

### Basic Form

```tsx
import { Field, Input, Button, Form } from "@highwind/greenhouse-nine";

function LoginForm() {
  return (
    <Form>
      <Field label="Email" required>
        <Input type="email" placeholder="you@example.com" />
      </Field>

      <Field label="Password" required>
        <Input type="password" />
      </Field>

      <Button type="submit">Log In</Button>
    </Form>
  );
}
```

### Toast Notifications

```tsx
import {
  ThemeProvider,
  ToastProvider,
  useToast,
  Button,
} from "@highwind/greenhouse-nine";

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <MyComponent />
      </ToastProvider>
    </ThemeProvider>
  );
}

function MyComponent() {
  const toast = useToast();

  return (
    <Button onClick={() => toast.success("Operation successful!")}>
      Show Toast
    </Button>
  );
}
```

### Message Interface

```tsx
import { MessageList, Message, MessageInput } from "@highwind/greenhouse-nine";

function ChatInterface() {
  const [messages, setMessages] = useState([
    { id: "1", content: "Hello!", sender: "user", timestamp: new Date() },
  ]);

  return (
    <div>
      <MessageList>
        {messages.map(msg => (
          <Message
            key={msg.id}
            content={msg.content}
            sender={msg.sender}
            timestamp={msg.timestamp}
          />
        ))}
      </MessageList>

      <MessageInput
        onSend={content => {
          setMessages([
            ...messages,
            {
              id: Date.now().toString(),
              content,
              sender: "user",
              timestamp: new Date(),
            },
          ]);
        }}
      />
    </div>
  );
}
```

### Markdown Rendering

```tsx
import { MarkdownRenderer } from "@highwind/greenhouse-nine";

function Documentation() {
  const markdown = `
# Hello World

This is **bold** and this is *italic*.

\`\`\`javascript
const greeting = 'Hello!';
console.log(greeting);
\`\`\`
  `;

  return <MarkdownRenderer content={markdown} />;
}
```

## Component Development

To view and develop components interactively:

```bash
pnpm install
pnpm run ladle
```

This starts the Ladle development server with live component stories at `http://localhost:61000`.

## TypeScript Support

All components include full TypeScript definitions:

```tsx
import type { ButtonProps, InputProps } from "@highwind/greenhouse-nine";

const myButtonProps: ButtonProps = {
  size: "md",
  variant: "solid",
  color: "accent",
};
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development setup and guidelines.

## License

MIT © Edward Vetter-Drake

## Links

- [Radix UI Themes Documentation](https://www.radix-ui.com/themes/docs)
- [Component API Reference](./COMPONENTS.md)
