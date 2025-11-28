# Component API Reference

Detailed API documentation for all Greenhouse Nine components.

## Table of Contents

- [Theme & Providers](#theme--providers)
- [Form Components](#form-components)
- [Layout & Display](#layout--display)
- [Typography](#typography)
- [Messaging Components](#messaging-components)
- [Feedback](#feedback)
- [Utilities](#utilities)

---

## Theme & Providers

### ThemeProvider

Wraps your application with the Greenhouse Nine theme configuration.

```tsx
import { ThemeProvider } from "@highwind/greenhouse-nine";

<ThemeProvider>{children}</ThemeProvider>;
```

**Props:** `{ children: React.ReactNode }`

**Theme Configuration:**

- Appearance: Dark mode
- Accent color: Green
- Gray scale: Gray
- Border radius: Medium
- Scaling: 100%

---

## Form Components

### Input

Standard text input with design system sizing.

```tsx
import { Input } from "@highwind/greenhouse-nine";

<Input size="md" placeholder="Enter text..." />;
```

**Props:** `InputProps`

| Prop    | Type                      | Default | Description                    |
| ------- | ------------------------- | ------- | ------------------------------ |
| size    | `'sm' \| 'md' \| 'lg'`    | `'md'`  | Input size                     |
| ...rest | `RadixTextFieldRootProps` | -       | All Radix TextField.Root props |

**Variants:**

- `Input` - Standard text input
- `PasswordInput` - Password input with show/hide toggle
- `NumberInput` - Numeric input
- `MaskedInput` - Input with IMask support for formatted inputs

### TextArea

Multi-line text input.

```tsx
import { TextArea } from "@highwind/greenhouse-nine";

<TextArea size="md" placeholder="Enter multi-line text..." />;
```

**Props:** `TextAreaProps`

| Prop    | Type                   | Default | Description              |
| ------- | ---------------------- | ------- | ------------------------ |
| size    | `'sm' \| 'md' \| 'lg'` | `'md'`  | TextArea size            |
| ...rest | `RadixTextAreaProps`   | -       | All Radix TextArea props |

### Select

Dropdown selection component.

```tsx
import { Select, SelectItemOption } from "@highwind/greenhouse-nine";

const items: SelectItemOption[] = [
  { label: "Option 1", value: "opt1" },
  { label: "Option 2", value: "opt2", disabled: true },
];

<Select size="md" items={items} value="opt1" onValueChange={v => {}} />;
```

**Props:** `SelectProps`

| Prop    | Type                   | Default | Description                                |
| ------- | ---------------------- | ------- | ------------------------------------------ |
| size    | `'sm' \| 'md' \| 'lg'` | `'md'`  | Select size                                |
| items   | `SelectItemOption[]`   | -       | Array of options (alternative to children) |
| ...rest | `RadixSelectRootProps` | -       | All Radix Select.Root props                |

**Types:**

```tsx
interface SelectItemOption {
  label: string;
  value: string;
  disabled?: boolean;
}
```

### Checkbox

Checkbox input with label.

```tsx
import { Checkbox } from "@highwind/greenhouse-nine";

<Checkbox size="md" defaultChecked>
  Accept terms
</Checkbox>;
```

**Props:** `CheckboxProps`

| Prop    | Type                   | Default | Description              |
| ------- | ---------------------- | ------- | ------------------------ |
| size    | `'sm' \| 'md' \| 'lg'` | `'md'`  | Checkbox size            |
| ...rest | `RadixCheckboxProps`   | -       | All Radix Checkbox props |

### RadioGroup

Radio button group.

```tsx
import { RadioGroup, RadioOption } from "@highwind/greenhouse-nine";

const options: RadioOption[] = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
];

<RadioGroup size="md" options={options} value="1" onValueChange={v => {}} />;
```

**Props:** `RadioGroupProps`

| Prop        | Type                         | Default | Description                |
| ----------- | ---------------------------- | ------- | -------------------------- |
| size        | `'sm' \| 'md' \| 'lg'`       | `'md'`  | Radio size                 |
| options     | `RadioOption[]`              | -       | Array of radio options     |
| orientation | `'horizontal' \| 'vertical'` | -       | Layout orientation         |
| ...rest     | `RadixRadioGroupProps`       | -       | All Radix RadioGroup props |

### Switch

Toggle switch component.

```tsx
import { Switch } from "@highwind/greenhouse-nine";

<Switch size="md" defaultChecked onCheckedChange={checked => {}} />;
```

**Props:** `SwitchProps`

| Prop    | Type                   | Default | Description            |
| ------- | ---------------------- | ------- | ---------------------- |
| size    | `'sm' \| 'md' \| 'lg'` | `'md'`  | Switch size            |
| ...rest | `RadixSwitchProps`     | -       | All Radix Switch props |

### DatePicker

Date selection with calendar popup.

```tsx
import { DatePicker } from "@highwind/greenhouse-nine";

<DatePicker
  value={new Date()}
  onChange={date => {}}
  placeholder="Select date"
/>;
```

**Props:** `DatePickerProps`

| Prop        | Type                                | Default | Description      |
| ----------- | ----------------------------------- | ------- | ---------------- |
| value       | `Date \| undefined`                 | -       | Selected date    |
| onChange    | `(date: Date \| undefined) => void` | -       | Change handler   |
| placeholder | `string`                            | -       | Placeholder text |
| disabled    | `boolean`                           | -       | Disabled state   |

### Combobox

Searchable select/autocomplete component.

```tsx
import { Combobox, ComboboxOption } from "@highwind/greenhouse-nine";

const options: ComboboxOption[] = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
];

<Combobox
  options={options}
  value="react"
  onValueChange={v => {}}
  placeholder="Select framework..."
/>;
```

**Props:** `ComboboxProps`

| Prop          | Type                      | Default | Description       |
| ------------- | ------------------------- | ------- | ----------------- |
| options       | `ComboboxOption[]`        | `[]`    | Available options |
| value         | `string`                  | -       | Selected value    |
| onValueChange | `(value: string) => void` | -       | Change handler    |
| placeholder   | `string`                  | -       | Placeholder text  |
| disabled      | `boolean`                 | -       | Disabled state    |

### Field

Form field wrapper with label and validation.

```tsx
import { Field, Input } from "@highwind/greenhouse-nine";

<Field
  label="Email"
  required
  error="Invalid email"
  hint="We'll never share your email"
>
  <Input type="email" />
</Field>;
```

**Props:** `FieldProps`

| Prop     | Type              | Default | Description          |
| -------- | ----------------- | ------- | -------------------- |
| label    | `string`          | -       | Field label          |
| required | `boolean`         | -       | Required indicator   |
| error    | `string`          | -       | Error message        |
| hint     | `string`          | -       | Helper text          |
| children | `React.ReactNode` | -       | Form input component |

### Form

Form wrapper component.

```tsx
import { Form, Field, Input, Button } from "@highwind/greenhouse-nine";

<Form onSubmit={e => e.preventDefault()}>
  <Field label="Name">
    <Input />
  </Field>
  <Button type="submit">Submit</Button>
</Form>;
```

**Props:** `FormProps`

Standard HTML form props.

### Label

Form label component.

```tsx
import { Label, Input } from '@highwind/greenhouse-nine';

<Label htmlFor="email">Email</Label>
<Input id="email" />
```

**Props:** `LabelProps`

| Prop     | Type              | Default | Description         |
| -------- | ----------------- | ------- | ------------------- |
| htmlFor  | `string`          | -       | Associated input ID |
| children | `React.ReactNode` | -       | Label content       |

---

## Layout & Display

### Card

Content container with variants.

```tsx
import { Card } from "@highwind/greenhouse-nine";

<Card variant="surface" size="md">
  Content here
</Card>;
```

**Props:** `CardProps`

| Prop     | Type                                | Default     | Description        |
| -------- | ----------------------------------- | ----------- | ------------------ |
| variant  | `'surface' \| 'classic' \| 'ghost'` | `'surface'` | Card style variant |
| size     | `'sm' \| 'md' \| 'lg'`              | `'md'`      | Card padding size  |
| children | `React.ReactNode`                   | -           | Card content       |

### Dialog

Modal dialog component.

```tsx
import { Dialog, Button } from "@highwind/greenhouse-nine";

<Dialog>
  <Dialog.Trigger>
    <Button>Open Dialog</Button>
  </Dialog.Trigger>

  <Dialog.Content title="Dialog Title">Dialog content here</Dialog.Content>
</Dialog>;
```

**Props:** `DialogProps`

Standard Radix Dialog props with custom styling.

### Tooltip

Contextual tooltip.

```tsx
import { Tooltip, Button } from "@highwind/greenhouse-nine";

<Tooltip content="Helpful tip">
  <Button>Hover me</Button>
</Tooltip>;
```

**Props:** `TooltipProps`

| Prop     | Type              | Default | Description     |
| -------- | ----------------- | ------- | --------------- |
| content  | `React.ReactNode` | -       | Tooltip content |
| children | `React.ReactNode` | -       | Trigger element |

### Dropdown

Dropdown menu component.

```tsx
import { Dropdown, DropdownItem } from "@highwind/greenhouse-nine";

const items: DropdownItem[] = [
  { label: "Edit", value: "edit", onSelect: () => {} },
  { label: "Delete", value: "delete", onSelect: () => {} },
];

<Dropdown items={items} trigger={<Button>Actions</Button>} />;
```

**Props:** `DropdownProps`

| Prop     | Type                | Default | Description              |
| -------- | ------------------- | ------- | ------------------------ |
| trigger  | `React.ReactNode`   | -       | Dropdown trigger element |
| items    | `DropdownItem[]`    | -       | Menu items               |
| sections | `DropdownSection[]` | -       | Grouped menu sections    |

### ContextMenu

Right-click context menu.

```tsx
import { ContextMenu, ContextMenuItemData } from "@highwind/greenhouse-nine";

const items: ContextMenuItemData[] = [
  { label: "Copy", value: "copy", onSelect: () => {} },
  { type: "separator" },
  { label: "Paste", value: "paste", onSelect: () => {} },
];

<ContextMenu items={items}>
  <div>Right-click me</div>
</ContextMenu>;
```

**Props:** `ContextMenuProps`

| Prop     | Type                    | Default | Description     |
| -------- | ----------------------- | ------- | --------------- |
| items    | `ContextMenuItemData[]` | -       | Menu items      |
| children | `React.ReactNode`       | -       | Trigger element |

---

## Typography

### Text

Body text component.

```tsx
import { Text } from "@highwind/greenhouse-nine";

<Text size="md" weight="medium">
  Some text
</Text>;
```

**Props:** `TextProps`

| Prop     | Type                                         | Default | Description  |
| -------- | -------------------------------------------- | ------- | ------------ |
| size     | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`       | `'md'`  | Text size    |
| weight   | `'light' \| 'regular' \| 'medium' \| 'bold'` | -       | Font weight  |
| children | `React.ReactNode`                            | -       | Text content |

### Heading

Heading component (h1-h6).

```tsx
import { Heading } from "@highwind/greenhouse-nine";

<Heading as="h1" size="lg">
  Page Title
</Heading>;
```

**Props:** `HeadingProps`

| Prop     | Type                                           | Default | Description      |
| -------- | ---------------------------------------------- | ------- | ---------------- |
| as       | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | -       | HTML heading tag |
| size     | `'sm' \| 'md' \| 'lg' \| 'xl'`                 | -       | Heading size     |
| children | `React.ReactNode`                              | -       | Heading content  |

---

## Messaging Components

### Message

Individual message display component.

```tsx
import { Message } from "@highwind/greenhouse-nine";

<Message variant="user" timestamp="2:30 PM" status="sent" markdown>
  Hello, world!
</Message>;
```

**Props:** `MessageProps`

| Prop      | Type                                           | Default  | Description                             |
| --------- | ---------------------------------------------- | -------- | --------------------------------------- |
| variant   | `'user' \| 'system' \| 'assistant'`            | `'user'` | Message sender type                     |
| timestamp | `string`                                       | -        | Message timestamp                       |
| status    | `'sending' \| 'sent' \| 'delivered' \| 'read'` | -        | Message status                          |
| username  | `string`                                       | -        | Sender username (for non-user messages) |
| markdown  | `boolean`                                      | `false`  | Render content as markdown              |
| children  | `React.ReactNode`                              | -        | Message content                         |

### MessageInput

Message input field with send button.

```tsx
import { MessageInput } from "@highwind/greenhouse-nine";

<MessageInput
  onSend={content => console.log(content)}
  placeholder="Type a message..."
/>;
```

**Props:** `MessageInputProps`

| Prop        | Type                        | Default | Description       |
| ----------- | --------------------------- | ------- | ----------------- |
| onSend      | `(content: string) => void` | -       | Send handler      |
| placeholder | `string`                    | -       | Input placeholder |
| disabled    | `boolean`                   | -       | Disabled state    |

### MessageList

Scrollable message container.

```tsx
import { MessageList, Message } from "@highwind/greenhouse-nine";

<MessageList>
  <Message variant="user">Hello</Message>
  <Message variant="assistant">Hi there!</Message>
</MessageList>;
```

**Props:** `MessageListProps`

| Prop     | Type              | Default | Description        |
| -------- | ----------------- | ------- | ------------------ |
| children | `React.ReactNode` | -       | Message components |

### ChatLayout

High-level chat container that composes `Message`, `MessageList`, `TypingIndicator`, and `MessageInput` into a single layout.

```tsx
import { ChatLayout, type ChatLayoutMessage } from "@highwind/greenhouse-nine";

const messages: ChatLayoutMessage[] = [
  {
    id: "1",
    variant: "system",
    timestamp: "Today",
    content: "Conversation started",
  },
  {
    id: "2",
    variant: "assistant",
    username: "Assistant",
    content: "How can I help you?",
  },
];

<ChatLayout
  title="Workspace Support"
  description="Chat with the Greenhouse assistant"
  messages={messages}
  typingUsers={["Assistant"]}
  onSend={value => console.log(value)}
  sidebar={<div>Members + Notes</div>}
/>;
```

**Props:** `ChatLayoutProps`

| Prop              | Type                                          | Default   | Description                                |
| ----------------- | --------------------------------------------- | --------- | ------------------------------------------ |
| messages          | `ChatLayoutMessage[]`                         | `[]`      | Collection passed to `Message` bubbles     |
| onSend            | `(message: string) => void`                   | -         | Handler routed to `MessageInput`           |
| title             | `React.ReactNode`                             | -         | Header title (if `header` not provided)    |
| description       | `React.ReactNode`                             | -         | Supporting text under the title            |
| status            | `React.ReactNode`                             | -         | Right-aligned status badge/text            |
| header            | `React.ReactNode`                             | -         | Custom header content                      |
| headerActions     | `React.ReactNode`                             | -         | Action slot next to the status             |
| toolbar           | `React.ReactNode`                             | -         | Row rendered under the header              |
| footer            | `React.ReactNode`                             | -         | Content between the list and input         |
| sidebar           | `React.ReactNode`                             | -         | Optional aside rendered next to the chat   |
| sidebarPosition   | `'left' \| 'right'`                           | `'right'` | Choose which edge renders the sidebar      |
| showInput         | `boolean`                                     | auto      | Force showing/hiding the default input     |
| typingUsers       | `string[]`                                    | `[]`      | Users forwarded to the typing indicator    |
| showTyping        | `boolean`                                     | auto      | Toggle typing indicator visibility         |
| loading           | `boolean`                                     | `false`   | Loading state for the message list         |
| emptyState        | `React.ReactNode`                             | -         | Custom empty state node                    |
| autoScroll        | `boolean`                                     | `true`    | Scroll to the newest message automatically |
| messageListProps  | `Partial<Omit<MessageListProps, 'children'>>` | -         | Pass-through props to `MessageList`        |
| messageInputProps | `Partial<MessageInputProps>`                  | -         | Pass-through props to `MessageInput`       |
| renderMessage     | `(message, index) => React.ReactNode`         | -         | Custom renderer for each message           |
| inputArea         | `React.ReactNode`                             | -         | Replace the default input area entirely    |

**Message shape:** `ChatLayoutMessage extends Omit<MessageProps, 'children'> { id: string | number; content: React.ReactNode; }`

### TypingIndicator

Animated typing indicator.

```tsx
import { TypingIndicator } from "@highwind/greenhouse-nine";

<TypingIndicator username="Alice" />;
```

**Props:** `TypingIndicatorProps`

| Prop     | Type     | Default | Description        |
| -------- | -------- | ------- | ------------------ |
| username | `string` | -       | User who is typing |

### MarkdownRenderer

Markdown content renderer with syntax highlighting.

```tsx
import { MarkdownRenderer } from "@highwind/greenhouse-nine";

const markdown = `
# Title
**Bold** and *italic* text.

\`\`\`javascript
console.log('Hello');
\`\`\`
`;

<MarkdownRenderer>{markdown}</MarkdownRenderer>;
```

**Props:** `MarkdownRendererProps`

| Prop      | Type     | Default | Description          |
| --------- | -------- | ------- | -------------------- |
| children  | `string` | -       | Markdown content     |
| className | `string` | -       | Additional CSS class |

**Features:**

- GitHub Flavored Markdown (GFM)
- Syntax highlighting via `highlight.js`
- Code blocks with language detection

---

## Feedback

### ToastProvider

Toast notification provider (wrap at app root).

```tsx
import { ThemeProvider, ToastProvider } from "@highwind/greenhouse-nine";

<ThemeProvider>
  <ToastProvider>
    <App />
  </ToastProvider>
</ThemeProvider>;
```

**Props:** `ToastProviderProps`

| Prop     | Type              | Default | Description |
| -------- | ----------------- | ------- | ----------- |
| children | `React.ReactNode` | -       | App content |

### useToast

Hook for showing toast notifications.

```tsx
import { useToast } from "@highwind/greenhouse-nine";

function MyComponent() {
  const toast = useToast();

  const handleClick = () => {
    toast.showToast({
      title: "Success",
      description: "Operation completed",
      intent: "success",
      durationMs: 4000,
    });
  };

  return <button onClick={handleClick}>Show Toast</button>;
}
```

**API:**

```tsx
interface ToastOptions {
  title?: React.ReactNode;
  description?: React.ReactNode;
  intent?: 'info' | 'success' | 'warning' | 'error';
  durationMs?: number;
  actionLabel?: string;
  onAction?: () => void;
}

const { showToast } = useToast();
showToast(options: ToastOptions): void
```

**Convenience methods:**

```tsx
const toast = useToast();

toast.showToast({ intent: "info", title: "Info" });
toast.showToast({ intent: "success", title: "Success" });
toast.showToast({ intent: "warning", title: "Warning" });
toast.showToast({ intent: "error", title: "Error" });
```

---

## Utilities

### ColorPalette

Design system color viewer (development tool).

```tsx
import { ColorPalette } from "@highwind/greenhouse-nine";

<ColorPalette />;
```

Displays all available design tokens from the color palette.

---

## Design Tokens

Access design tokens directly:

```tsx
import { colors } from "@highwind/greenhouse-nine";

const myColor = colors.emerald; // '#93B97A'
const bgColor = colors.charcoal; // '#151515'
```

**Available token categories:**

- `colors` - Complete color palette

See `src/tokens/colors.ts` for the full list of available colors.

---

## TypeScript Support

All components export their prop types:

```tsx
import type {
  ButtonProps,
  InputProps,
  SelectProps,
  ToastOptions,
  MessageProps,
  // ... etc
} from "@highwind/greenhouse-nine";
```

---

## Radix UI Re-exports

Greenhouse Nine re-exports many Radix UI Themes components that aren't overridden:

**Layout:** `Container`, `Section`, `Box`, `Flex`, `Grid`
**Typography:** `Em`, `Strong`, `Code`, `Kbd`, `Quote`, `Link`, `Blockquote`
**Data Display:** `Table`, `DataList`, `Badge`, `Avatar`
**Feedback:** `Spinner`, `Skeleton`, `Progress`
**Navigation:** `Tabs`, `TabNav`, `ScrollArea`
**Overlays:** `Popover`, `HoverCard`, `AlertDialog`, `DropdownMenu`
**Form:** `Slider`, `SegmentedControl`, `TextField`, `Radio`
**Utilities:** `Separator`, `AspectRatio`, `Inset`, `Callout`, `VisuallyHidden`, `AccessibleIcon`

See the [Radix UI Themes documentation](https://www.radix-ui.com/themes/docs) for usage details.
